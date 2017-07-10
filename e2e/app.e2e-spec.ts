import { browser, by, element, protractor, Key, WebDriver } from 'protractor';

//[TODO] потестить useAllAngular2AppRoots: true
describe('Maps testing', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/');

    let addressArr;
    let cities = ['chehov', 'protvino', 'обнинск', 'таруса', 'серпухов'];
    let input = element(by.css('input'));
    
    for (let i = 0; i < cities.length; i++) {
        input.sendKeys(cities[i]);
        input.sendKeys(protractor.Key.ENTER);
        browser.sleep(500);
    }

    addressArr = element.all(by.css('.mat-elevation-z2'));

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
        const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';

        let dragElm = addressArr.get(2);
        let dropElm = addressArr.get(0);
        browser.executeScript(JS_HTML5_DND, dragElm.getWebElement(), dropElm.getWebElement());
        expect(addressArr.get(0).getText()).toEqual('таруса');
    });
    //     let dragAndDrop = require('html-dnd').code;
    //     let dragElm = addressArr.get(2);
    //     let dropElm = addressArr.get(0);
    //     let offsetX = 0;
    //     let offsetY = 0;

    //     browser.executeScript(dragAndDrop, dragElm, dropElm, offsetX, offsetY);
    //     // browser.actions()
    //     //     .mouseMove(dragElm.getWebElement())
    //     //     .mouseDown()
    //     //     .mouseMove(dropElm.getWebElement())
    //     //     .mouseMove({ x: 0, y: 5 })
    //     //     .mouseUp().perform();
    //     browser.sleep(2000);
    //     expect(addressArr.get(0).getText()).toEqual('таруса');
    // });

    it('should have a infoWindow', () => {
        let marker = element(by.deepCss('div.gmnoprint img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"]')).element(by.xpath(".."));
        marker.click();
        let info = element(by.xpath('//div[text() = "chehov"]'));
        expect(info.isPresent()).toBe(true);
    });
});
