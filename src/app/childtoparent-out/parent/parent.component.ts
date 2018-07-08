import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'output-app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class OutputParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message: string;
  recieveMessageEvent($event){
    this.message = $event;
  }
}
