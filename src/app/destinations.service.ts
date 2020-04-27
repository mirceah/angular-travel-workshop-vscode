import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  
  destinations = [
    {
      name: 'Minas Tirith',
      summary: 'Fortified capital of the kingdom of Gondor',
      description: 'Minas Tirith covered the entire Hill of Guard. You will see well preserved weapon chambers , climb through the seven levels all the way up to the Citadel where you can feast at the lovely Isildur restaurant, just like kings used to',
      price: 4800,
      isFavorite: true,
    },
    {
      name: 'Mordor',
      summary: 'Realm and base of operations of Sauron',
      description: 'Visit the once feared land of Mordor. A one day visit to the Sauron Museum, followed by lovely hiking on the three enormous mountain ranges surrounding it and last but not least, the Orc Catacombs where many mumified Orc bodies can be observed',
      price: 5000,
      isFavorite: false,
    }
  ];

  constructor() { }
}
