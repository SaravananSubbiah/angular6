import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  searchUser: string;
  users: UserResponse[];
  constructor(private _appService: AppService) {

    this._appService.getUsers().subscribe(data=>this.users = data); 
   
   }

  ngOnInit() {
      //this._appService.getUsers().subscribe(data=>this.users = data.filter(u => u.login == 'mojombo'));
      //this.users = this._appService.getUsers2();
  }



  SearchUser(){
    this.users = this.users.filter(u => u.login.includes(this.searchUser));
  }
}

interface UserResponse {
  login: string;
  id:string;
  type: string;
  organizations_url: string;
}

