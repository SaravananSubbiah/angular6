
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

//return this.http.get<UserResponse[]>('https://api.github.com/users');
return this.http.get<UserResponse[]>('https://api.github.com/users')
                .pipe(map(res => res))              
                ;

}

getUserById(id: string): Observable<UserResponse> {
  return this.http.get<UserResponse>('https://api.github.com/users/'+id);
  
  }

getUsers2(): UserResponse[]{
  return[
    { login:'emp101','id':'1', type:'Tom',organizations_url:'Male' },
    { login:'emp101','id':'1', type:'Tom',organizations_url:'Male' },
    { login:'emp101','id':'1', type:'Tom',organizations_url:'Male' },
    { login:'emp101','id':'1', type:'Tom',organizations_url:'Male' },
    { login:'emp101','id':'1', type:'Tom',organizations_url:'Male' },
]
  
}

handleError(error: Response){
  console.log('error on webservice');
  return Observable.throw(error); 
}


}

interface UserResponse {
  login: string;
  id:string;
  type: string;
  organizations_url: string;
}

