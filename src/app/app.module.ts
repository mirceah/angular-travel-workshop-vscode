import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteDestinationComponent } from './favorite-destination/favorite-destination.component';
import { MatIconModule } from '@angular/material/icon';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationSummaryComponent } from './destination-summary/destination-summary.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteDestinationComponent,
    DestinationDetailsComponent,
    DestinationSummaryComponent,
    DestinationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'destinations', component: DestinationsComponent },
      { path: 'contact', component: ContactComponent },
      // route to contact component
      { path: '', redirectTo: '/destinations', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
