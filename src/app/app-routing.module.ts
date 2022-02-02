import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './components/job/add-job/add-job.component';
import { JobDetailComponent } from './components/job/job-detail/job-detail.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { JobUpdateComponent } from './components/job/job-update/job-update.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';

const routes: Routes = [
  {path: 'add-job', component: AddJobComponent},
  {path: 'job-detail/:id', component: JobDetailComponent},
  {path: 'job-update/:id', component: JobUpdateComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '', component: JobListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
