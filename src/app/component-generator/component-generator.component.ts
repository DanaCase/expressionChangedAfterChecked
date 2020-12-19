import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import {SharedServiceParentComponent} from '../shared-service-parent/shared-service-parent.component';
import {ComponentAnchorDirective} from '../component-anchor.directive';

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
