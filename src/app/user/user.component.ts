import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userName: string;

user: UserResponse;
userId : string;
tuserId : string;
  
constructor(private _appService : AppService,private _activeroute: ActivatedRoute, _router: Router) {
  
}

  ngOnInit() {
      this.SearchUserById();
      

  }
  SearchUserById(){
    this._activeroute.params.subscribe( 
      params => {
        console.log(params);
        this.userId=params['Id'];
         this.userId=params['Id']? `Loading '${params['Id']}' now!.`: 'sdfs';
      
    this._appService.getUserById(params['Id']).subscribe(
      data=>this.userName = data.organizations_url);} );
  }

  

}
interface UserResponse {
  login: string;
  id:string;
  type: string;
  organizations_url: string;
}