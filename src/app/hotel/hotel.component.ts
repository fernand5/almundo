import { Component, OnInit } from '@angular/core';
import {HotelService} from '../_services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: any = [];
  inputSearch = '';
  arrayStars = Array();
  displayStarsFilter = true;
  displayHotelSearch = true;
  showFilters = true;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getAll().subscribe(
      data => {
        this.hotels = data;
      },
      error => {
        console.log(error);
      }
    );

    if (window.screen.width < 992) { // 768px portrait
      this.showFilters = false;
    }
  }

  getHotel() {
    let starsToSend = '';
    let hotelName = '';
    if (this.arrayStars.length == 0) {
      starsToSend = 'all';
    } else {
      starsToSend = this.arrayStars.join(' ');
    }
    if (this.inputSearch == '') {
      hotelName = 'all';
    } else {
      hotelName = this.inputSearch;
    }
    this.hotelService.getHotel(hotelName, starsToSend).subscribe(
      data => {
        this.hotels = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  showFiltersActions() {
    this.showFilters = !this.showFilters;
  }
  displayStars() {
    this.displayStarsFilter = !this.displayStarsFilter;
  }
  displayHotelInput() {
    this.displayHotelSearch = !this.displayHotelSearch;
  }

  arrayBuild(n: number): any[] {
    return Array(n);
  }

  starsSelected(number) {
    if (this.arrayStars.includes(number)) {
      const index = this.arrayStars.indexOf(number);
      this.arrayStars.splice(index, 1);
    } else {
      this.arrayStars.push(number);
    }
    console.log(this.arrayStars);
  }
}
