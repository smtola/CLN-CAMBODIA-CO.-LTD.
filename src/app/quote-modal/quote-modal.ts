import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-modal.html',
  styleUrl: './quote-modal.scss'
})
export class QuoteModal {
  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
      this.isOpen = false;
    }
  }
}
