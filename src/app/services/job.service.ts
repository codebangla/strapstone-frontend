import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from './../models/job';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
    })
};
  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + '/jobs');

  }
  getJob(id: number) {
    return this.http.get<Job>(this.baseUrl + '/jobs/' + id.toString());
  }

  addJob(job: Job) {
    return this.http.post(this.baseUrl + '/jobs', job, this.httpOptions);
  }

  deleteJob(id: number) {
    return this.http.delete<Job>(this.baseUrl + '/jobs/' + id.toString(), this.httpOptions);
  }

  updateJob(id: number, job: Job) {
    return this.http.patch<Job>(this.baseUrl + '/jobs/update/' + id.toString(), job, this.httpOptions);
  }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/cities');
  }

}
