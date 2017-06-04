import { Component, OnInit } from '@angular/core';

import { decoratorExampleApp } from './06-decorators/01-decorator-example';
import { eventEmitterDecoratorApp } from './06-decorators/event-emitter-decorator-app';

@Component({
  selector: 'ts-tasks',
  templateUrl: './ts-tasks.component.html'
})
export class TSTasksComponent implements OnInit {
  ngOnInit(): void {
    // on init code
    eventEmitterDecoratorApp();
  }

  runApp() {
    decoratorExampleApp();
  }
}
