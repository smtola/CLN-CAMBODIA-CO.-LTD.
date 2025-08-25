import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us-form.html',
  styleUrl: './contact-us-form.scss'
})
export class ContactUsForm {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Contact form data:', form.value);
      alert('Thank you! We will get back to you soon.');
      form.reset();
    }
  }
}
