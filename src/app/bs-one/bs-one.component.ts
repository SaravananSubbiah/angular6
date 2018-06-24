import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../behaviour-subject.service';


@Component({
  selector: 'app-bs-one',
  templateUrl: './bs-one.component.html',
  styleUrls: ['./bs-one.component.css']
})
export class BsOneComponent implements OnInit {
  user : string;
  editUser : string;
  constructor(private behaviorSubjectService: BehaviorSubjectService) { }

  ngOnInit() {
    this.behaviorSubjectService.cast.subscribe(user => this.user = user);
  }
  editTheUser(){
    this.behaviorSubjectService.edituser(this.editUser);
  }

}
