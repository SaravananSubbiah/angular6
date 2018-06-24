import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

   getApp(): string { 
      return "Hello world"; 
   } 
getUsers(): Observable<UserResponse[]> {
 return this.http.get<UserResponse[]>('https://api.github.com/users');
}

} 

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
