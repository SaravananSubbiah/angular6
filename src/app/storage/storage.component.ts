import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  _lStore: string;
  constructor() { }

  ngOnInit() {

    var object = { value: "value", timestamp: new Date().getTime() }
    localStorage.setItem("key", JSON.stringify(object));
    this._lStore = localStorage.getItem("key");
    // Let us open our database
    var request = window.indexedDB.open("MyTestDatabase", 3);
    if (!window.indexedDB) {
      window.alert("No! Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    else {
      window.alert("Your browser supports a stable version of IndexedDB. Such and such feature will be available.");
    }
    console.log("Storage : " + this._lStore);
  }

}
