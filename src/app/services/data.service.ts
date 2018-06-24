import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {IgisJobs} from '../../models/gisJobs';
import {IgisJobsSummary} from '../../models/gisJobssummary';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class GisJobsService {
   
    constructor(private http: Http) {
  }

    getJobs(): Observable<IgisJobs[]> {

      //return this.http.get('http://localhost:4200/src/app/employee/gisjobslist.json')
      return this.http.get('/assets/gisjobslist.json')
        .pipe(map(response => response.json()));
             //.catch(this.handleError);
    }

    getJobsSummary(): Observable<IgisJobsSummary[]> {
        
                //return this.http.get('http://localhost:4200/src/app/employee/gisjobslist.json')
      return this.http.get('/assets/gisjobssummary.json')
        .pipe(map(response => response.json()));
                     //.catch(this.handleError);
            }

handleError(error: Response){
    console.log('error on webservice');
    return Observable.throw(error); 
}

      
}
