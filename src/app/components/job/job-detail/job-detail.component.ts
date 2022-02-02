import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from './../../../models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  public jobId!: number;
  job: Job = {
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
    isDeleting: false,  
  }
  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobService) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];

    this.jobService.getJob(this.jobId).pipe().subscribe(
      (data: Job) => {
        this.job = data;
        console.log(this.job);
      }
    )
  }

  onBack() {
    this.router.navigate(['/']);
  }

}
