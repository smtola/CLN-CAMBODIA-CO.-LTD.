import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ContactUsForm } from '../../contact-us-form/contact-us-form';

@Component({
  selector: 'app-contact-us',
  imports: [NgOptimizedImage, ContactUsForm],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {

}
