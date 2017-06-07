import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPI } from 'googlemaps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public google: any;

    lat: number = 55.75222;
    lng: number = 37.61556; 

    constructor(private GoogleMapsAPI: GoogleMapsAPI) {
        let publicConfig = {
            key: 'AIzaSyDMkPRO6HIqp99ob_LW4rJgugizxOeN4NQ',
            stagger_time:       1000, // for elevationPath
            encode_polylines:   false,
            secure:             true, // use https
        };

        this.google = new GoogleMapsAPI(publicConfig);
    }

    ngOnInit() {
        console.log(this.google);
        // let Moscow = { lat: this.lat, lng: this.lng };
        // let map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 4,
        //     center: Moscow
        // });
        // let marker = new google.maps.Marker({
        //     position: Moscow,
        //     map: map
        // });
    }
}
