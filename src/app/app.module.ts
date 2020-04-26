import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteDestinationComponent } from './favorite-destination/favorite-destination.component';
import { MatIconModule } from '@angular/material/icon';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationSummaryComponent } from './destination-summary/destination-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteDestinationComponent,
    DestinationDetailsComponent,
    DestinationSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
