import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Job } from './../../../models/job';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  loggedinUser: string | null  = '';
  constructor(private jobService: JobService, private router: Router) { }
  @Input() job: Job = {
    id: 0,
    title: '',
    company_name: '',
    company_address: '',
    company_logo_url: '',
    description: '',
    requirement: '',
    qualification: '',
    offer: '',
    cityId: 0,
    isDeleting: false
  }
  jobs!: Job[];
  @Output()
  jobtoBeDeleted: EventEmitter<any> = new EventEmitter();

  deleteJob() {
    this.jobtoBeDeleted.emit();
  }
  loggedin() {
    this.loggedinUser = localStorage.getItem('userName');
    return this.loggedinUser;
}
  ngOnInit(): void {
    this.jobService.getJobs()
      .pipe(first())
      .subscribe(jobs => this.jobs = jobs);
  }
}
