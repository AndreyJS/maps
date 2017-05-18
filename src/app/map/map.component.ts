import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public newAddress;
    public addressArr = [];

    constructor() { }

    ngOnInit() {
    }

    public addAddress() {
        this.addressArr.push(this.newAddress);
        this.newAddress = undefined;
    }

}
