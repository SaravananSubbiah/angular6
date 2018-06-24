import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>Testing parent message</div>
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "message from parent"
  constructor() { }
}
