import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contrived-parent',
    templateUrl: './contrived-parent.component.html',
    styleUrls: ['./contrived-parent.component.css']
})
export class ContrivedParentComponent implements OnInit {
    name = 'I am a contrived component';
    text = 'A message for the child component';
    constructor() { }

    ngOnInit() {
    }

}
