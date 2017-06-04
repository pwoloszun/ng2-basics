import { Component } from '@angular/core';

@Component({
  selector: 'property-binding-example',
  templateUrl: './property-binding-example.component.html'
})
export class PropertyBindingExampleComponent {

  bob: Object;
  isBtnDisabled: boolean;
  url: string;

  constructor() {
    this.bob = {name: 'Uncle Bob', sex: 'M'};
    this.isBtnDisabled = true;
    this.url = 'http://www.mememaker.net/static/images/memes/4572301.jpg'
  }

}
