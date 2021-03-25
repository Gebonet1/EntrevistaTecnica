import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { HomeComponent } from './Home/home/home.component';
import { CreateJobComponent } from './Job/create-job/create-job.component';
import { ListAppliedJobComponent } from './Job/list-applied-job/list-applied-job.component';
import { ListJobComponent } from './Job/list-job/list-job.component';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { MainComponent } from './Main/main/main.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'home', component:MainComponent},
  {path: 'main', component:HomeComponent},
  {path: 'skill/list-skill', component: ListSkillComponent},
  {path: 'candidate/list-candidate', component:CandidateComponent},
  {path: 'job/list-job', component:ListJobComponent},
  {path: 'job/create-job', component:CreateJobComponent},
  {path: 'job/list-applied-job', component:ListAppliedJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
