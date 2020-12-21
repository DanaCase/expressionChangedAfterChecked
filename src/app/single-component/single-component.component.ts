import { Component, OnInit, OnChanges} from '@angular/core';

@Component({
    selector: 'app-single-component',
    templateUrl: './single-component.component.html',
    styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    get time() {
        return Date.now();
    }
}
