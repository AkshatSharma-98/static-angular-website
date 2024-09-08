import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent implements OnInit {
  email: string;
  value: string;
  errorMessage: string | null;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    if(!this.email || this.email.length === 0) {
      this.errorMessage = 'Enter Your Email';
    } else {
      alert(`${this.email} registered successfully!`);
      this.email = '';
      this.errorMessage = '';
    }
  }
}
