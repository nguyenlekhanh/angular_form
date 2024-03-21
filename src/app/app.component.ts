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
  IsAgreed: boolean = false;

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
    console.log(this.form.value.address.country);

    // this.form.setValue({
    //   firstName: this.form.value.firstname,
    //   lastName: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: this.form.value.username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })

    this.form.form.patchValue({
      username: "test"
    });

    this.form.reset();
  }
}
