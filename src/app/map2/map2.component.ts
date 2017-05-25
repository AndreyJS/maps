import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'app-map2',
    templateUrl: './map2.component.html',
    styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {
    public newAddress;
    public addressArr = [];

    constructor(private DragulaService: DragulaService) {
        DragulaService.dropModel.subscribe((value) => {
            console.log(value);
            console.log(value.slice(1));
            this.onDropModel(value.slice(1));
        });
        DragulaService.removeModel.subscribe((value) => {
        this.onRemoveModel(value.slice(1));
        });
    }
    
    public addAddress() {
        this.addressArr.push(this.newAddress);
        this.newAddress = undefined;
    }

    private onDropModel(args) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args) {
        let [el, source] = args;
        // do something else
    }

    ngOnInit() {
    }
}