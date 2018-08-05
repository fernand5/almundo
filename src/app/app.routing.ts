import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from './hotel/hotel.component';


const appRoutes: Routes = [

  // otherwise redirect to home
  { path: '', component: HotelComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
