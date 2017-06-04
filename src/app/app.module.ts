import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './02-view-interpolation-examples/hello-world/hello-world.component';
import { TSTasksComponent } from './01-ts-tasks/ts-tasks.component';
import { PropertyBindingExampleComponent } from './03-binding-examples/01-property-binding-example/property-binding-example.component';
import { EventBindingExampleComponent } from './03-binding-examples/02-event-binding-example/event-binding-example.component';
import { TwoWayBindingExampleComponent } from './03-binding-examples/03-two-way-binding-example/two-way-binding-example.component';
import { TextFieldWithDelayComponent } from './03-binding-examples/04-text-field-with-delay/text-field-with-delay.component';
import { ChildComponent } from './04-inputs-outputs-examples/child/child.component';
import { ParentComponent } from './04-inputs-outputs-examples/parent/parent.component';
import { ReversePipe } from './05-pipes-examples/pipes/reverse.pipe';
import { PipesExamplesComponent } from './05-pipes-examples/pipes-examples.component';
// TODO: import implemented components & pipes

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TSTasksComponent,
    // TODO view interpolation components
    HelloWorldComponent,

    // TODO binding components
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayBindingExampleComponent,
    TextFieldWithDelayComponent,

    // TODO input/outputs components
    ChildComponent,
    ParentComponent,
    // TODO todo list components

    // TODO custom pipes
    ReversePipe,
    PipesExamplesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
