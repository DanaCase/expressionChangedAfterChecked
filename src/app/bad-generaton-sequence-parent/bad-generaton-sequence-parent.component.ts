import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {ComponentAnchorDirective} from '../component-anchor.directive';
import {BadGenerationSequenceChildComponent} from '../bad-generation-sequence-child/bad-generation-sequence-child.component';

@Component({
    selector: 'app-bad-generaton-sequence-parent',
    templateUrl: './bad-generaton-sequence-parent.component.html',
    styleUrls: ['./bad-generaton-sequence-parent.component.css']
})
export class BadGeneratonSequenceParentComponent implements OnInit {

    @ViewChild(ComponentAnchorDirective) modeHost: ComponentAnchorDirective;
    name = 'I am a BadGeneratonSequenceParentComponent component';

    constructor(private r: ComponentFactoryResolver) {
    }

    ngOnInit() {}

    ngAfterViewInit() {
        const componetFactory = this.r.resolveComponentFactory(BadGenerationSequenceChildComponent);
        const viewContainerRef = this.modeHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componetFactory);
    }
}
