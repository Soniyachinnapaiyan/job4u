import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'signup', pathMatch: 'full'
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'personal-details', component: PersonalDetailsComponent
  },
  {
    path: 'education-details', component: EducationDetailsComponent
  },
  {
    path: 'experience-details', component: ExperienceDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
