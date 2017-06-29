import { browser, by, element, protractor, Key, WebDriver } from 'protractor';

describe('Maps testing', () => {
    let cities = ['moscow', 'protvino', 'обнинск'];
    let input = element(by.css('input'));
    let addressArr = element(by.repeater('let item of addressArr; let i = index'));

	beforeEach(() => {
		browser.get('/');
        for (let i = 0; i < cities.length; i++) {
            input.sendKeys(cities[i] + '\n');
        }
	});

	it('should to add three address', () => {
        expect(addressArr.count()).toEqual('3');
	});

    it('should to delete address', () => {
        addressArr.row[1].element(by.css('.material-icons')).click();
        expect(addressArr.count()).toEqual('2');
    });

    it('should to move element', () => {
        let allAddress = element.all(by.binding('item.address'));
        expect(allAddress.get(0).getText()).toEqual('moscow');

        browser.actions()
            .dragAndDrop(addressArr.row[1], addressArr.row[2])
            .mouseUp()
            .perform();

        expect(allAddress.get(0).getText()).toEqual('protvino');
    });

    it('should have a infoWindow', () => {
        let marker = element(by.css('img[src$="spotlight-poi.png"]'));
        marker.click();
        let info = element(by.xpath('/div[text() = "moscow"'));
        expect(info.isPresent()).toBe(true);
    });
});
