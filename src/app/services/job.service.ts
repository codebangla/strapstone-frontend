import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getJobs() : Observable<Job[]> {
   return this.http.get<Job[]>('data/jobs.json');
  }
}
