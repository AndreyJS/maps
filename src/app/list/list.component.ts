import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MapsService } from '../map/map2.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [MapsService]
})
export class ListComponent implements OnInit {

    @Input() addressArr: Array<any>;
    @Input() path: any;

    constructor(private _DragulaService: DragulaService, private _MapsService: MapsService) {

        this._DragulaService.dropModel.subscribe((value) => {
            this.reDrawPath(this.addressArr, this.path);
        });
    }

    ngOnInit() {
    }

    private reDrawPath(addressArr: Array<any>, path: any) {
        let pathArr = path.getPath();
        for (let i = 0; i < addressArr.length; i++) {
            if (addressArr[i].marker.position !== pathArr.getAt(i)) {
                pathArr.removeAt(i);
                pathArr.insertAt(i, addressArr[i].marker.position);
                continue;
            }
        }
    }

    public delAddress(i: number) {
        this.addressArr[i].marker.setMap(null);
        this.addressArr.splice(i, 1);
        this.path.getPath().removeAt(i);
    }

}
