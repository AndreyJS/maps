import { browser, by, element, protractor, Key, WebDriver } from 'protractor';

describe('Maps testing', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/');

    let addressArr;
    let cities = ['moscow', 'protvino', 'обнинск', 'таруса', 'зарайск'];
    let input = element(by.css('input'));
    
    for (let i = 0; i < cities.length; i++) {
        input.sendKeys(cities[i] + '\n');
    }

	// beforeEach(() => {

        addressArr = element.all(by.css('.mat-elevation-z2'));
	// });

	it('should to add five address', () => {
        expect(addressArr.count()).toEqual(5);
	});

	// it('should to add five markers', () => {
    //     let markers = element.all(by.css('img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"]'));
    //     expect(markers.count()).toEqual(10);
	// });

    it('should to delete address', () => {
        addressArr.get(1).element(by.css('.material-icons')).click();
        expect(addressArr.count()).toEqual(4);
    });

    it('should to move element', () => {
        let dragElm = addressArr.get(2);
        let dropElm = addressArr.get(0);
        // let driver = new WebDriver()
        // browser.actions()
        //     .dragAndDrop(addressArr.get(2).getWebElement(), addressArr.get(0).getWebElement())
        //     // .mouseUp()
        //     .perform();
        browser.actions().mouseMove(dragElm).mouseDown().mouseMove(dropElm).perform();
        browser.actions().mouseMove({ x: 0, y: 5 }).perform();
        browser.actions().mouseUp().perform();
            
        expect(addressArr.get(0).getText()).toEqual('таруса');
    });

    // it('should have a infoWindow', () => {
    //     let marker = element(by.css('img[src$="spotlight-poi.png"]'));
    //     marker.click();
    //     let info = element(by.xpath('/div[text() = "moscow"'));
    //     expect(info.isPresent()).toBe(true);
    // });
});
