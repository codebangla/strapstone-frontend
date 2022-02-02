import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss']
})
export class JobUpdateComponent implements OnInit {
  public jobId!: number;
  jobForm!: FormGroup;
  job!: Job;
  jobSubmitted!: boolean;
  cityList!: any[];

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private jobService: JobService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.jobService.getAllCities().subscribe(data => {
      this.cityList = data;
      console.log(data);
  });
    this.updateForm();
  }
  updateForm() {
    this.jobForm = this.fb.group({
      id: this.jobId,
      title: [null, Validators.required],
      company_name: [null, Validators.required],
      company_address: [null, Validators.required],
      company_logo_url: [null, Validators.required],
      description: [null, Validators.required],
      requirement: [null, Validators.required],
      qualification: [null, Validators.required],
      offer: [null, Validators.required],
      cityId: null,
      userId: 3
    });

    this.jobService.getJob(this.jobId).subscribe(res => {
      this.jobForm.patchValue(res);
    });
  }


  onSubmit() {
    this.jobSubmitted = true;

    // if (this.jobForm.valid) {
    this.jobService.updateJob(this.jobId, this.jobForm.value).subscribe(() => {
      this.onReset();
      this.alertify.success('Job Updated');
      this.onBack();
    });
  }


  get title() {
    return this.jobForm.get('title') as FormControl;
  }
  get company_name() {
    return this.jobForm.get('company_name') as FormControl;
  }
  get company_address() {
    return this.jobForm.get('company_address') as FormControl;
  }
  get company_logo_url() {
    return this.jobForm.get('company_logo_url') as FormControl;
  }
  get description() {
    return this.jobForm.get('description') as FormControl;
  }
  get requirement() {
    return this.jobForm.get('requirement') as FormControl;
  }

  get qualification() {
    return this.jobForm.get('qualification') as FormControl;
  }

  get offer() {
    return this.jobForm.get('offer') as FormControl;
  }

  get cityId() {
    return this.jobForm.get('cityId') as FormControl;
  }

  onReset() {
    this.jobSubmitted = false;
    this.jobForm.reset();
  }
  onBack() {
    this.router.navigate(['/']);
  }
}
