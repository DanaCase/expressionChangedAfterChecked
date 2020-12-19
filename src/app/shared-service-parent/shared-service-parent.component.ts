import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
    selector: 'app-shared-service-parent',
    templateUrl: './shared-service-parent.component.html',
    styleUrls: ['./shared-service-parent.component.css'],
})
export class SharedServiceParentComponent implements OnInit {

    name = 'I am Shared Service Parent component';
    text = 'A message for the child component';

    constructor(private sharedService: SharedServiceService) {
        console.log("am I constructed")
        const self = this;
        this.sharedService.onNameChange((value) => {
            self.text = value;
            console.log("text from constructor", self.text);
            console.log("value from constructor", value);
        });
    }

    ngOnInit() {
        const self = this;
        this.sharedService.onNameChange((value) => {
            console.log(new Error().stack)
            self.text = value;
            console.log("text from init", self.text);
            console.log("value from init", value);
        });
    
    }

}
