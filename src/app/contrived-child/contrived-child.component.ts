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

    //If you change the parent here you will get expressionChanged error
    ngOnInit() {
        this.parent.text = 'updated text';
        
        //if you commend out the above change (and the below ngAfterViewInit) this will work. Because onInit is run before the DOM is rendered.
        this.parent.name = "Hah I was named by my child";
    }


    //This wont work because its running after the DOM has been updated
    ngAfterViewInit() {
        this.parent.name = "This wont work";
    }

}
