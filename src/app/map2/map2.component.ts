import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

@Component({
    selector: 'app-map2',
    templateUrl: './map2.component.html',
    styleUrls: ['./map2.component.scss']
})

export class Map2Component implements OnInit {
    private geocoder: any;
    private map: any;
    private path: any;
    // lat: number = 55.75222;
    // lng: number = 37.61556; 
    public newAddress: string;
    public addressArr = [];
    // public lineArr = [];

    constructor(private DragulaService: DragulaService, private MapsAPILoader: MapsAPILoader) {

        DragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
        DragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    private geocode(address) {
        this.geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                this.map.setCenter(results[0].geometry.location);
                let infowindow = new google.maps.InfoWindow({
                    content: address
                })
                let marker = new google.maps.Marker({
                    map: this.map,
                    draggable: true,
                    position: results[0].geometry.location
                });
                marker.addListener('click', () => {
                    infowindow.open(this.map, marker);
                });
                marker.addListener('mouseup', (event) => {
                    for (let i = 0; i < this.addressArr.length; i++) {
                        if (marker === this.addressArr[i].marker) {
                            this.path.getPath().removeAt(i);
                            this.path.getPath().insertAt(i, event.latLng);
                            console.log(this.path.getPath());
                        }
                    }
                });
                this.addressArr.push({ address, marker });
                // this.lineArr.push({ lat: marker.position.lat(), lng: marker.position.lng()});
                let path = this.path.getPath();
                path.push(marker.position);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    public addAddress() {
        this.geocode(this.newAddress);
        this.newAddress = undefined; 
    }

    public delAddress(i: number) {
        this.addressArr[i].marker.setMap(null);
        this.addressArr.splice(i, 1);
        this.path.getPath().removeAt(i);
    }

    private onDropModel(args) {
        let [el, target, source] = args;
        this.reDrawPath();
    }

    private onRemoveModel(args) {
        let [el, source] = args;
        // do something else
    }

    private reDrawPath() {
        let pathArr = this.path.getPath();
        for (let i = 0; i < this.addressArr.length; i++) {
            if (this.addressArr[i].marker.position !== pathArr.getAt(i)) {
                pathArr.removeAt(i);
                pathArr.insertAt(i, this.addressArr[i].marker.position);
                continue;
            }
        }
    }

    ngOnInit() {
        this.MapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(55.75222, 37.61556);
            let options = {
                zoom: 8,
                center: latlng
            }
            this.map = new google.maps.Map(document.getElementById('map'), options);
            this.path = new google.maps.Polyline({
                strokeColor: 'blue',
                strokeOpacity: 0.7,
                strokeWeight: 4
            });
            this.path.setMap(this.map);
        });
    }
}