import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    private geocoder: any;
    private map: any;
    lat: number = 55.75222;
    lng: number = 37.61556; 
    public newAddress: string;
    public addressArr = [];

    constructor(private DragulaService: DragulaService, private MapsAPILoader: MapsAPILoader) {

        DragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
        DragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    private geocode() {
        this.geocoder.geocode({ 'address': this.newAddress }, (results, status) => {
            if (status === 'OK') {
                // this.map.setCenter(results[0].geometry.location);
                this.addressArr.push({ address: this.newAddress, lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() });   
                this.newAddress = undefined; 
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    public addAddress() {
        this.geocode();
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
        this.MapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
        });
    }
}