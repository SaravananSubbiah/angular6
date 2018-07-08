import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <div>
      <ng-content select="app-counter"></ng-content>
    </div>

    <!-- using ng-container with ngProjectAs -->
    <ng-container ngProjectAs="app-counter">
    <app-counter></app-counter>
    </ng-container>

    <!-- using ng-container inside normal div -->
    <div *ngFor="let item of items">
    <ng-container ngProjectAs="app-counter">
    <app-counter></app-counter>
    </ng-container>
    </div>
    <!-- using ng-container inside normal div -->
    <ng-container *ngFor="let item of items" ngProjectAs="app-counter">
    <app-counter></app-counter>
    </ng-container>


  `,
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor() { }
  items = [0, 0, 0];
  ngOnInit() {
  }
}
