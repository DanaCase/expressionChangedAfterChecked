import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bad-generation-sequence-child',
    templateUrl: './bad-generation-sequence-child.component.html',
    styleUrls: ['./bad-generation-sequence-child.component.css']
})
export class BadGenerationSequenceChildComponent implements OnInit {

    name = 'I am a BadGenerationSequenceChildComponent component';

    constructor() {
    }

    ngOnInit() {}
}
