import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class BehaviorSubjectService {
private user= new BehaviorSubject<string>('john');
cast = this.user.asObservable();
  constructor() { }
  edituser(newUser){
    this.user.next(newUser);
  }

}
