import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'output-app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class OutputChildComponent implements OnInit {
  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
