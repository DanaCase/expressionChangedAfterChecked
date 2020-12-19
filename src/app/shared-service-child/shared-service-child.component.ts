import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {SharedServiceService} from "../shared-service.service";

@Component({
    selector: 'app-shared-service-child',
    templateUrl: './shared-service-child.component.html',
    styleUrls: ['./shared-service-child.component.css'],
})
export class SharedServiceChildComponent implements OnInit {

    name = 'I am Shared Service Child component';
    @Input() text;
    constructor(
        private sharedService: SharedServiceService
    ) { }

    ngOnInit() {
        this.sharedService.setText('updated name');
    }

    ngOnChanges() {
        this.sharedService.setText('updated in on changes');
    }

}
