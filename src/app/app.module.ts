import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedServiceParentComponent } from './shared-service-parent/shared-service-parent.component';
import { SharedServiceChildComponent } from './shared-service-child/shared-service-child.component';
import { ComponentGeneratorComponent } from './component-generator/component-generator.component';
import { ComponentAnchorDirective } from './component-anchor.directive';
import {SharedServiceService} from './shared-service.service';

@NgModule({
    declarations: [
        AppComponent,
        SharedServiceParentComponent,
        SharedServiceChildComponent,
        ComponentGeneratorComponent,
        ComponentAnchorDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        SharedServiceService
    ],
    bootstrap: [AppComponent],
    entryComponents: [SharedServiceParentComponent]
})
export class AppModule { }
