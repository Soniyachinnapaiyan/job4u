import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TopnavbarComponent,
    FooterComponent,
    PersonalDetailsComponent,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    SkillDetailsComponent,
    HomepageComponent,
    SendEmailComponent,
  
    HomeNavbarComponent,
        MyProfileComponent
  ],
  imports: [
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRippleModule,
    MatChipsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
