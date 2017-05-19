import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'app-dragula',
    templateUrl: './dragula.component.html',
    styleUrls: ['./dragula.component.scss']
})
export class DragulaComponent implements OnInit {
    public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
    public many2: Array<string> = ['Explore', 'them'];

    constructor(private dragulaService: DragulaService) {
        dragulaService.dropModel.subscribe((value) => {
            debugger
        this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value) => {
        this.onRemoveModel(value.slice(1));
        });
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
