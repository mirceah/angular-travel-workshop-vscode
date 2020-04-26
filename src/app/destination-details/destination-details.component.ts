import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() destination;

  constructor() { }

  ngOnInit(): void {
  }

}
