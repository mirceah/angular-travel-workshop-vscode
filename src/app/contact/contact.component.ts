import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  name = '';
  message = '';

  testimonials = [
    {
      name: 'Gandalf',
      message: 'Am venit că... vroiam să... aflăm ce se petrece, că e prima dată care am venit '
    },
    {
      name: 'Sauron',
      message: 'Caut un inel, dar nu gasesc. Inel cu inscriptia: "ash nazg thrakatulûk, agh burzum-ishi krimpatul". Toata lumea sa apeleze la mine. Ofer recompensa!'
    },
  ];

  addTestimonial() {
    this.testimonials.unshift({ name: this.name, message: this.message });
  }

}