import { Component } from '@angular/core';
interface Location {
  value: string;
  viewValue: string;
}
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.css']
})
export class MainHomepageComponent {
  constructor(private formBuilder:FormBuilder){}
  profileForm = this.formBuilder.group({});
  pref_loc: Location[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'banglr', viewValue: 'Banglore'},
    {value: 'Banglore', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Kolkata', viewValue: 'Kolkata'}
  ];
  pref_exp: Location[] = [
    {value: 'Fresher', viewValue: 'Fresher'},
    {value: '0 - 1', viewValue: '0 - 1'},
    {value: '1 - 2', viewValue: '1 - 2'},
    {value: '2 - 3', viewValue: '2 - 3'},
    {value: '3 - 4', viewValue: '3 -4'},
    {value: '4 - 5', viewValue: '4 - 5'},
    {value: '5+', viewValue: '5+'},
  ]

}
