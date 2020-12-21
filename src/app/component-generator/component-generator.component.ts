import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import {SharedServiceParentComponent} from '../shared-service-parent/shared-service-parent.component';
import {ComponentAnchorDirective} from '../component-anchor.directive';
import {CircularEventParentComponent} from '../circular-event-parent/circular-event-parent.component';
import {BadGeneratonSequenceParentComponent} from '../bad-generaton-sequence-parent/bad-generaton-sequence-parent.component';
import {ContrivedParentComponent} from '../contrived-parent/contrived-parent.component';
import {SingleComponentComponent} from '../single-component/single-component.component';

@Component({
    selector: 'app-component-generator',
    templateUrl: './component-generator.component.html',
    styleUrls: ['./component-generator.component.css'],
})
export class ComponentGeneratorComponent implements OnInit {

    @Input() componentType = "SharedService";
    @ViewChild(ComponentAnchorDirective) modeHost: ComponentAnchorDirective;
    components = {}; 
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.components['SharedService'] = SharedServiceParentComponent;
        this.components['CircularEvent'] = CircularEventParentComponent;
        this.components['BadGenerationSequence'] = BadGeneratonSequenceParentComponent;
        this.components['Contrived'] = ContrivedParentComponent;
        this.components['SingleComponent'] = SingleComponentComponent;
    }

    ngOnInit() {
    }

    generateComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.componentType]);
        const viewContainerRef = this.modeHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
    }

}
