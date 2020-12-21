import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedServiceParentComponent } from './shared-service-parent/shared-service-parent.component';
import { SharedServiceChildComponent } from './shared-service-child/shared-service-child.component';
import { ComponentGeneratorComponent } from './component-generator/component-generator.component';
import { ComponentAnchorDirective } from './component-anchor.directive';
import {SharedServiceService} from './shared-service.service';
import { CircularEventParentComponent } from './circular-event-parent/circular-event-parent.component';
import { CircularEventChildComponent } from './circular-event-child/circular-event-child.component';
import { BadGeneratonSequenceParentComponent } from './bad-generaton-sequence-parent/bad-generaton-sequence-parent.component';
import { BadGenerationSequenceChildComponent } from './bad-generation-sequence-child/bad-generation-sequence-child.component';
import { ContrivedParentComponent } from './contrived-parent/contrived-parent.component';
import { ContrivedChildComponent } from './contrived-child/contrived-child.component';
import { SingleComponentComponent } from './single-component/single-component.component';

@NgModule({
    declarations: [
        AppComponent,
        SharedServiceParentComponent,
        SharedServiceChildComponent,
        ComponentGeneratorComponent,
        ComponentAnchorDirective,
        CircularEventParentComponent,
        CircularEventChildComponent,
        BadGeneratonSequenceParentComponent,
        BadGenerationSequenceChildComponent,
        ContrivedParentComponent,
        ContrivedChildComponent,
        SingleComponentComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        SharedServiceService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        SharedServiceParentComponent,
        CircularEventParentComponent,
        BadGeneratonSequenceParentComponent,
        BadGenerationSequenceChildComponent,
        ContrivedParentComponent,
        SingleComponentComponent,
    ]
})
export class AppModule { }
