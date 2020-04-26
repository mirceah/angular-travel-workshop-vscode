import { Component } from '@angular/core';
import { DestinationsService } from './destinations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'meTravel';
  isList = true;

  constructor(public destinationsService: DestinationsService) {}

  toggleDisplay() {    
    // accesarea proprietatii 'isList' din clasa AppComponent se face astfel: this.isList
    this.isList = !this.isList;
  }
}
