import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AppService } from './app.service';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, DemoService] 
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  value: string = "";
  public foods;
  public users;
	login = ''; 
    constructor(private http: HttpClient, private router: Router, private _appService: AppService, private _demoService: DemoService) {
      this.getFoods();
      this.getUsers();

this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }
 ngOnInit(): void {

   this.value = this._appService.getApp();
   this.foods = this._demoService.getFoods();

(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();

// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}


// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
}

function definitionNotHoisted () {
    console.log("Definition not hoisted!");
};


// ReferenceError: funcName is not defined
funcName();

// TypeError: undefined is not a function
//varName();

//var varName = function funcName() {
function funcName() {
    console.log("Definition not hoisted! blah");
};

try {
  try {
    throw new Error('oops! Something happened');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

let y = 1;
{
  let y = 2;
}
console.log(y); // outputs 2

function getMonthName(mo) {

mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }

}
let add = function(c){
  console.log(this.a+this.b+ c);
}

let obj ={
  a:1,
  b:2
};

add.call(obj, 3);

console.dir([]);


try { // statements to try
  var monthName = getMonthName(5); // function could throw 
  console.log(monthName );
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}

function logMyErrors(e) {
	console.log('Exception Thrown');
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"

    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
	  this.login = ("User Login: " + data.login); 
        console.log("User Login: " + data.login);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      },
      (httperr: HttpErrorResponse) => {
        if (httperr.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
}

 getFoods() {
   //this._demoService.getFoods().subscribe(
   this._demoService.getFoods().subscribe(
     // the first argument is a function which runs on success
     data => { this.foods = data },
     // the second argument is a function which runs on error
     err => console.error(err),
     // the third argument is a function which runs on completion
     () => console.log('done loading foods')
   );
 }

 getUsers() {
   //this._demoService.getFoods().subscribe(
   this._appService.getUsers().subscribe(
     // the first argument is a function which runs on success
     data => { this.users = data },
     // the second argument is a function which runs on error
     err => console.error(err),
     // the third argument is a function which runs on completion
     () => console.log('done loading users')
   );
 }



goBack() {
  this.router.navigate(['/']);
}

}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
