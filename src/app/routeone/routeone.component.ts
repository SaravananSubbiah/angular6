import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeone',
  template: `
    <p>
      routeone Works!
    </p>
    <p>Counting with a local variable.</p>

    <button type="button" (click)="getTrainingName(3)">Count!</button>

    <p id="demo">{{counter}}</p>
    <a routerLink="/routetwo">RouteTwo</a>
<br/>
    
  `,
  styles: []
})
export class RouteoneComponent implements OnInit {

  counter = 0 ;
  constructor() {
    
  }
  getTrainingName(n: number) {
    // button click handler
    this.counter += n;
  }

  ngOnInit() {

    // Javascript Closures - A Counter Dilemma

    var counter = 0;

    //function add() {      
    //  counter += 1;
    //}

    //add();
    //add();
    //add();
    //console.log('Counter Value ==> ' + counter); // the counter is now equal to 3

    var add = (function () {
      var counter = 0;
      return function () { return counter += 1; }
    })();

    add();
    add();
    add();

    function myFunction() {
      this.counter = add();
    }



    //Apply vs.Call vs.Bind Examples
    //Call

    var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    var person2 = { firstName: 'Kelly', lastName: 'King' };

    function sayCall(greeting, title) {
      console.log(`${greeting} ${title} ${this.firstName} ${this.lastName}`);
    }

    sayCall.call(person1, 'Hello', 'Mr.'); // Hello Jon Kuperman
    sayCall.call(person2, 'Hello', 'Mrs.'); // Hello Kelly King

    //Apply

    var person = {
      firstName: 'Jon',
      lastName: 'Kuperman',
      say: function (greeting, title) {
        console.log(`${greeting} ${title} ${this.firstName} ${this.lastName}`);
      }
    };
    console.log(person.say('Hello', 'Mr.'));
    var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    var person2 = { firstName: 'Kelly', lastName: 'King' };

    function sayApply(greeting, title) {
      console.log(`${greeting} ${title} ${this.firstName} ${this.lastName}`);
      }

    sayApply.apply(person1, ['Hello', 'Mr.']); // Hello Jon Kuperman
    sayApply.apply(person2, ['Hello', 'Mrs.']); // Hello Kelly King

    //Bind

    var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    var person2 = { firstName: 'Kelly', lastName: 'King' };

    function sayBind() {
      console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }

    var sayHelloJon = sayBind.bind(person1);
    var sayHelloKelly = sayBind.bind(person2);

    sayHelloJon(); // Hello Jon Kuperman
    sayHelloKelly(); // Hello Kelly King

    /*
    When To Use Each
    Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.

    I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.

    Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.

    Bind is great for a lot of things. We can use it to curry functions like in the above example. We can take a simple hello function and turn it into a helloJon or helloKelly. We can also use it for events like onClick where we don’t know when they’ll be fired but we know what context we want them to have.
    */

    // usign ES6 - Map
    console.log('ES 6 Map usage'); // hobby = cycling  [object Object] = [object Object]
    const map = new Map(); // Create a new Map
    map.set('hobby', 'cycling'); // Sets a key value pair

    const foods = { dinner: 'Curry', lunch: 'Sandwich', breakfast: 'Eggs' }; // New Object
    const normalfoods = {}; // New Object

    map.set(normalfoods, foods); // Sets two objects as key value pair

    for (const [key, value] of map) {
      console.log(`${key} = ${value}`); // hobby = cycling  [object Object] = [object Object]
    }

    map.forEach((key, value) => {
      console.log(`${key} = ${value}`);
    }, map); // hobby = cycling  [object Object] = [object Object]

    map.clear(); // Clears key value pairs
    console.log(map.size === 0); // True

  
  var text = 'India';

  //var mySet = new Set(text);
  var mySet = new Set();
  mySet.add(text);
  mySet.add(1); // Set [ 1 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add('some text'); // Set [ 1, 5, 'some text' ]
  var o = {a: 1, b: 2};
  mySet.add(o);
  console.log(`Hello I'm having ${mySet.size} items!`);
  mySet.add({a: 1, b: 2}); 
  // o is referencing a different object so this is okay
  for (const x of mySet) {
      console.log(x);
  console.log(x); // Same order in as out - Mercury Venus Earth
}
  mySet.has(1); // true
  mySet.has(3); // false, 3 has not been added to the set
  mySet.has(5);              // true
  mySet.has(Math.sqrt(25));  // true
  mySet.has('Some Text'.toLowerCase()); // true
  mySet.has(o); // true
  
  mySet.size; // 5
  
  mySet.delete(5); // removes 5 from the set
  mySet.has(5);    // false, 5 has been removed
  
  mySet.size; // 4, we just removed one value
  console.log(mySet)
  mySet.add('a');
  mySet.add("{a:1}")  // Set ['I', 'n', 'd', 'i', 'a']
  let greetings:string = `Hello ${mySet.size}, I'm so happy to see you!`;
  console.log(`Hello ${mySet.size}, I'm so happy to see you!`);  // 5

  let a = "Hello";
let b = 5;
let c = new Date();
let d = function D() { return true; };
class E {};
let e = new E();
console.log(typeof a);  // string
console.log(typeof b);  // number
console.log(typeof c);  // object
console.log(typeof d);  // function
console.log(typeof e);  // object
console.log(typeof E);  // function

class Fruit {}
class Vegetable {}
let apple = new Fruit();
console.log(apple instanceof Fruit); // true
console.log(apple instanceof Vegetable); // false



}
}
