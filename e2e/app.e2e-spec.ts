import { browser, by, element, protractor, Key, WebDriver } from 'protractor';
//[TODO] потестить useAllAngular2AppRoots: true
describe('Maps testing', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/');

    let addressArr;
    let cities = ['chehov', 'protvino', 'обнинск', 'таруса', 'серпухов'];
    let input = element(by.css('input'));
    
    for (let i = 0; i < cities.length; i++) {
        input.sendKeys(cities[i] + '\n');
    }

	// beforeEach(() => {

        addressArr = element.all(by.css('.mat-elevation-z2'));
	// });

	it('should to add five addresses', () => {
        expect(addressArr.count()).toEqual(5);
	});

	it('should to add five markers', () => {
        let markers = element.all(by.deepCss('div.gmnoprint img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"]'));
        expect(markers.count()).toEqual(5);
	});

    it('should to delete address', () => {
        addressArr.get(1).element(by.css('.material-icons')).click();
        expect(addressArr.count()).toEqual(4);
    });

    it('should to move element', () => {
        let dragElm = addressArr.get(2);
        let dropElm = addressArr.get(0);
        browser.actions()
            .mouseMove(dragElm).mouseDown().mouseMove( {x: 100, y:0}).mouseUp()
            // .mouseUp()
            .perform();
        // browser.actions()
        //     .mouseMove(dragElm.getWebElement())
        //     .mouseDown()
        //     .mouseMove(dropElm.getWebElement())
        //     .mouseMove({ x: 0, y: 5 })
        //     .mouseUp().perform();
    });

    it('should have a infoWindow', () => {
        let marker = element(by.deepCss('div.gmnoprint img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"]')).element(by.xpath(".."));
        marker.click();
        let info = element(by.xpath('//div[text() = "chehov"]'));
        expect(info.isPresent()).toBe(true);
    });
});
