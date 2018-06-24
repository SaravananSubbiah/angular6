import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IgisJobs } from '../models/gisJobs';
import { IgisJobsSummary } from '../models/gisJobssummary';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) {
  }
  
  // Uses http.get() to load data from a single API endpoint
  getFoods(): Observable<FoodsResponse[]> {
    return this.http.get<FoodsResponse[]>('/assets/food.json');
  }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  /*
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/books.json').pipe(map((res: Response) => res.json())),
      this.http.get('/app/movies.json').pipe(map((res: Response) => res.json()))
    );
  }

  createFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.post('/api/food/', body, options).map((res: Response) => res.json());
  }

  updateFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.put('/api/food/' + food.id, body, options).map((res: Response) => res.json());
  }

  deleteFood(food) {
    return this.http.delete('/api/food/' + food.id);
  }
  */

}

interface FoodsResponse {
  id: string;
  name: string;  
}
