import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}



@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}