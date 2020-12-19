import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ipModeHost]'
})
export class ComponentAnchorDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
