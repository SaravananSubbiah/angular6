import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {
  totalEstimate = 101;
  selectedTemplate = 'estimateTemplate';
  ctx = {estimate: this.totalEstimate};
  ctxNew = {estimate: ++this.totalEstimate};
  constructor() { }

  ngOnInit() {
  }

}
