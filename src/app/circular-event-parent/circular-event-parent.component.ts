import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-circular-event-parent',
    templateUrl: './circular-event-parent.component.html',
    styleUrls: ['./circular-event-parent.component.css']
})
export class CircularEventParentComponent implements OnInit {

    name = 'I am a circular event component';
    text = 'A message for the child component';

    constructor() {}

    update(value) {
        this.text = value;
    }

    ngOnInit() {
    }

}
