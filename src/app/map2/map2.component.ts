import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'app-map2',
    templateUrl: './map2.component.html',
    styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {
    public newAddress: string;
    public addressArr = [];

    constructor(private DragulaService: DragulaService) {
        DragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
        DragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    // public initMap() {
    //     var uluru = { lat: -25.363, lng: 131.044 };
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }

    public addAddress() {
        this.addressArr.push(this.newAddress);
        this.newAddress = undefined;
    }

    public delAddress(i: number) {
        this.addressArr.splice(i, 1);
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