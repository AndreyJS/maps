import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { MapsService } from './map/map.service';

declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MapsService]
})
export class AppComponent {
    
    @ViewChild('map') _map: ElementRef;

    private map: any;   
    private path: any;
    
    public addressArr = [];
    public newAddress: string;

    constructor(private _MapsAPILoader: MapsAPILoader, private _MapsService: MapsService, private _NgZone: NgZone) {}

    public addAddress() {
        this._MapsService.getLatLan(this.newAddress)
            .subscribe(result => {
                debugger
                this._NgZone.run(() => {
                    this.map.setCenter(result);
                    let infowindow = new google.maps.InfoWindow({
                        content: this.newAddress
                    })
                    let marker = new google.maps.Marker({
                        map: this.map,
                        draggable: true,
                        position: result
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
                    this.addressArr.push({ address: this.newAddress, marker });
                    this.newAddress = '';
                    let path = this.path.getPath();
                    path.push(marker.position);
                });
            },
            error => console.log(error),
            () => {console.log('Geo done')});
            
    }

    ngOnInit() {
        this._MapsAPILoader.load().then(() => {
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
