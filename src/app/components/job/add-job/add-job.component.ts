import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobService } from 'src/app/services/job.service';
import { Job } from './../../../models/job';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  jobForm!: FormGroup;
  job!: Job;
  jobSubmitted!: boolean;
  cityList!: any[];

  constructor(private router: Router, private fb: FormBuilder, private jobService: JobService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createJobForm();
    this.jobService.getAllCities().subscribe(data => {
      this.cityList = data;
      console.log(data);
  });
}

  createJobForm() {
    this.jobForm = this.fb.group({
      title: [null, Validators.required],
      company_name: [null, Validators.required],
      company_address: [null, Validators.required],
      company_logo_url: [null, Validators.required],
      description: null,
      requirement: null,
      qualification: null,
      offer: null,
      cityId: null,
    });
  }
  onSubmit() {
    console.log(this.jobForm);
    this.jobSubmitted = true;

    if (this.jobForm.valid) {
      this.jobService.addJob(this.jobData()).subscribe(() => {
        this.onReset();
        this.alertify.success('New Job Added');
        this.onBack();
      });
    }
  }

  jobData(): Job {
    return this.job = {
      id: 0,
      title: this.title.value,
      company_name: this.company_name.value,
      company_address: this.company_address.value,
      company_logo_url: this.company_logo_url.value,
      description: this.description.value,
      requirement: this.requirement.value,
      qualification: this.qualification.value,
      offer: this.offer.value,
      cityId: this.cityId.value,
      isDeleting: false
    };
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
