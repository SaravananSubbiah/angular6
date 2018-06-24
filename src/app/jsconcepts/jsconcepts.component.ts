import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsconcepts',
  templateUrl: './jsconcepts.component.html',
  styleUrls: ['./jsconcepts.component.css']
})
export class JsconceptsComponent implements OnInit {
  
  constructor() { 
    


  }
  
  ngOnInit() {
    console.log("Component initiated - jsconcepts");
    const profile={
      firstName: "",
      lastName: "",
      fullName: function(){
        return this.firstName + " " + this.lastName;
      },
      setName: function (name){
        let splitName= (n) => {
        let nameArray = n.split(" ");
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];
        };
        splitName(name);
      }
    }
    profile.setName("Saravanan Subbiah");
    for (let x in profile) {
      console.log(profile[x]);
  }
  delete profile.firstName;
    console.log(profile.firstName);
    console.log(profile.lastName);
    console.log(profile.fullName());
    console.log(document.readyState);
    console.log(document.domain);
    console.log("1" + document.anchors);	
console.log(document.applets);	
console.log(document.baseURI);	
console.log(document.body);	
console.log(document.cookie);	
console.log(document.doctype);
console.log(document.documentElement);
//console.log(document.documentMode);
//console.log(document.documentURI)
console.log(document.domain);
//console.log(document.domConfig);
console.log(document.embeds);
console.log(document.forms);
console.log(document.head	);
console.log(document.images);
console.log(document.implementation);
console.log(document.inputEncoding);
console.log(document.lastModified);
console.log(document.links);
console.log(document.readyState);
console.log(document.referrer);
console.log(document.scripts);
//console.log(document.strictErrorChecking);
console.log(document.title);
console.log(document.URL);

let car = function(model){
  this.model = model;
}

car.prototype.getModel = function(){
  return this.model;
}

let toyota = new car('toyota');
console.log(toyota.getModel());
console.log();


  }



}
