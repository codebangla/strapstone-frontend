import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './../../../models/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }
@Input() job: Job = {
  id: 0,
  title: '',
  company_name: '',
  company_logo_url: '',
  location: '',
  posted_time: ''
}
 
  ngOnInit(): void {
  }

}
