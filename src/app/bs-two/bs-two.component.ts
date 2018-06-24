import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../behaviour-subject.service';
@Component({
  selector: 'app-bs-two',
  templateUrl: './bs-two.component.html',
  styleUrls: ['./bs-two.component.css']
})
export class BsTwoComponent implements OnInit {

  user: string;
  constructor(private behaviorSubjectService: BehaviorSubjectService) { }

  ngOnInit() {
    this.behaviorSubjectService.cast.subscribe(user => this.user = user)
  }

}
