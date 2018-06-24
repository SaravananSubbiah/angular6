import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildChildComponent } from "../viewchildchild/viewchildchild.component";

@Component({
  selector: 'viewchild-app-parent',
  template: `
    Message: {{message}}
    <viewchild-app-child></viewchild-app-child>
  `,
  styleUrls: ['./viewchildparent.component.css']
})
export class ViewChildParentComponent implements AfterViewInit {

  @ViewChild(ViewChildChildComponent) child;

  constructor() { }

  message: string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
