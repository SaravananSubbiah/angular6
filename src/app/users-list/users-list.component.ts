import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  searchUser: string;
  users: UserResponse[];
  constructor(private _appService: AppService) {
    this._appService.getUsers().subscribe(data => this.users = data);
  }

  ngOnInit() {
    //this._appService.getUsers().subscribe(data=>this.users = data.filter(u => u.login == 'mojombo'));
    //this.users = this._appService.getUsers2();
  }
  addUser() {
    //this.users.unshift(new user("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteUsers() {
    this.users = []
  }


  SearchUser() {
    this.users = this.users.filter(u => u.login.includes(this.searchUser));
  }

  goBack(){
    return null;
  }
}

interface UserResponse {
  login: string;
  id: string;
  type: string;
  organizations_url: string;
}

