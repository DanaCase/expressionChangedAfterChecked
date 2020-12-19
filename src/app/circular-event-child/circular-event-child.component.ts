import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-circular-event-child',
    templateUrl: './circular-event-child.component.html',
    styleUrls: ['./circular-event-child.component.css']
})
export class CircularEventChildComponent implements OnInit {
    name = 'I am CircularEventChildComponent component';
    @Input() text;
    @Output() change = new EventEmitter();
    constructor() { }

    ngOnInit() {
        this.change.emit('updated text');

    }

}
