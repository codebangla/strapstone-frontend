import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { JobCardComponent } from './components/job/job-card/job-card.component';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    NavBarComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
