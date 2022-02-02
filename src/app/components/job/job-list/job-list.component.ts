
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Job } from './../../../models/job';
import { JobService } from './../../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];
  job!: Job;
  
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().pipe().subscribe(
      data => {
        this.jobs = data;
      }
    )
  }
  deleteJob(id: number) {
    let indexToBeRemoved = this.jobs.findIndex((x) => (x.id === id));
    if (indexToBeRemoved != -1){
      this.jobs.splice(indexToBeRemoved, 1);
      }

    this.jobService.deleteJob(id).subscribe(
      (data: Job) => {
        this.job = data;
      }
    );
  }
  
}
