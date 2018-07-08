import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say Hi! Message passed from parent - {{childMessage}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() 
  childMessage: string;

  constructor() { }

}
