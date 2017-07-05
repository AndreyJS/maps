import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { Observable } from 'rxjs/Rx';

declare var google: any;

@Component({
    selector: 'app-map2',
    templateUrl: './map2.component.html',
    styleUrls: ['./map2.component.scss']
})

export class Map2Component implements OnInit {
    
    @ViewChild('map') _map: ElementRef;

    private arrow: any;
    private geocoder: any;
    private map: any;
    private path: any;

    public addressArr = [];
    public addressArrObs: Observable<Array<any>>;
    public newAddress: string;

    constructor(private DragulaService: DragulaService, private MapsAPILoader: MapsAPILoader) {

        DragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
    }

    getAddressArr(obj?: any) {
        if (obj) {
            this.addressArr.push(obj);
            this.newAddress = '';
        }
        return Observable.interval(0).map(i => this.addressArr ? this.addressArr : undefined);
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

                this.addressArrObs = this.getAddressArr({ address, marker });

                let path = this.path.getPath();
                path.push(marker.position);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    public addAddress() {
        // let obj = { address: this.newAddress } ;
        this.geocode(this.newAddress);
        // this.addressArr.push(obj);
        // this.newAddress = undefined; 
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
        this.addressArrObs = this.getAddressArr();
        this.MapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(55.75222, 37.61556);
            let options = {
                zoom: 8,
                center: latlng
            }
            
            this.map = new google.maps.Map(this._map.nativeElement, options);
            let arrow = {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
            };
            this.path = new google.maps.Polyline({
                icons: [{
                    icon: arrow,
                    offset: '33%'
                }, {
                    icon: arrow,
                    offset: '66%'
                }],
                strokeColor: 'blue',
                strokeOpacity: 0.7,
                strokeWeight: 4
            });
            this.path.setMap(this.map);
        });
    }
}