import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_form';

  firstName: string = '';
  lastName: string = '';
  
  @ViewChild('registrationForm') form: NgForm

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Other'},
  ]
  OnFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.value.firstname);
    console.log(this.form.controls['firstname'].value);
  }
}
