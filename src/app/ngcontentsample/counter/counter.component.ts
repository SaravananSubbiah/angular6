import { Component, OnInit } from '@angular/core';
let instances = 0;
@Component({
  selector: 'app-counter',
  template: `<h1>
  {{this.id}}
  </h1>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  id: number;
  
  constructor() {
    this.id = ++instances;
  }
  ngOnInit() {
  }

}

