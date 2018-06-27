
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

     
 getApp(): string { 
  return "Hello world"; 
} 
getUsers(): Observable<UserResponse[]> {

return this.http.get<UserResponse[]>('https://api.github.com/users');

}

getUsers2(): UserResponse[]{
  return[
    { login:'emp101', type:'Tom',organizations_url:'Male' },
    { login:'emp101', type:'Tom',organizations_url:'Male' },
    { login:'emp101', type:'Tom',organizations_url:'Male' },
    { login:'emp101', type:'Tom',organizations_url:'Male' },
    { login:'emp101', type:'Tom',organizations_url:'Male' },
]
  
}


}

interface UserResponse {
  login: string;
  type: string;
  organizations_url: string;
}

