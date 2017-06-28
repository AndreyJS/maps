import { browser, element, by } from 'protractor';
import { MapsPage } from './app.po';

let page: MapsPage;

// describe('maps App', () => {
// 	beforeEach(() => {
// 		page = new MapsPage();
// 	});

// 	it('should display message saying app works', () => {
// 		page.navigateTo();
// 		expect(page.getParagraphText()).toEqual('app works!');
// 	});
// });

// describe('test', () => {
// 	beforeEach(() => {
// 		page = new MapsPage();
// 	});
// 	it('should have a title', () => {
// 		page.navigateTo();
// 		expect(browser.getTitle()).toEqual('Maps');
// 	});
// });

describe('Protractor Demo App', () => {
	let first = element(by.model('first'));
	let second = element(by.model('second'));
	let goBtn = element(by.id('gobutton'));
	let latestResult = element(by.binding('latest'));
	let history = element.all(by.repeater('result in memory'));

	function add(a, b) {
		first.sendKeys(a);
		second.sendKeys(b);
		goBtn.click();
	}

	beforeEach(() => {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	it('should have a history', () => {
		add(1, 2);
		add(3, 4);

		expect(history.count()).toEqual(2);

		add(5, 6);

		expect(history.count()).toEqual(3);
	});
});
