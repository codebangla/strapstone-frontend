import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { JobCardComponent } from './components/job/job-card/job-card.component';
import { JobService } from './services/job.service';
import { AddJobComponent } from './components/job/add-job/add-job.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobDetailComponent } from './components/job/job-detail/job-detail.component';
import { JobUpdateComponent } from './components/job/job-update/job-update.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    NavBarComponent,
    JobCardComponent,
    AddJobComponent,
    UserRegisterComponent,
    UserLoginComponent,
    JobDetailComponent,
    JobUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
