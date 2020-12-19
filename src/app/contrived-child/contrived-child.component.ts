import { Component, OnInit, Input } from '@angular/core';
import { ContrivedParentComponent} from '../contrived-parent/contrived-parent.component';

@Component({
    selector: 'app-contrived-child',
    templateUrl: './contrived-child.component.html',
    styleUrls: ['./contrived-child.component.css']
})
export class ContrivedChildComponent implements OnInit {

    @Input() text;

    constructor(private parent: ContrivedParentComponent) {}

    ngOnInit() {
        this.parent.text = 'updated text';
    }

}
