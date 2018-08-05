import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import {routing} from './app.routing';
import {HotelService} from './_services/hotel.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ImagePreloadDirective} from './_directives/imagepreload.directive';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
