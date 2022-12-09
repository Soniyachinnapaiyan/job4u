import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SignupComponent } from './signup/signup.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'signup', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
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
  {
    path: 'skill-details', component: SkillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
