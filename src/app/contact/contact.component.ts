import { Component } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  name = '';
  message = '';

  constructor(public destinationsService: DestinationsService) {}

}