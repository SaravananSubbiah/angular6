import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-googlemap',
  template: `
    <p>
      routetwo Works!
    </p>
    <div #gmap style=”width:100%;height:400px”>Map</div>
    <a routerLink="/routeone">RouteOne</a>
<br/>
    <a routerLink="/routetwo">RouteTwo</a>

  `,
  styles: []
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
	var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    console.log(mapProp);
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  

}
