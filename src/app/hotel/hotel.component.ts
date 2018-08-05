import { Component, OnInit } from '@angular/core';
import {HotelService} from '../_services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: any = {};
  inputSearch = '';
  arrayStars = Array();
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getAll().subscribe(
      data => {
        this.hotels = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getHotel() {
    this.hotelService.getHotel(this.inputSearch, this.arrayStars.join(' ')).subscribe(
      data => {
        this.hotels = data;
      },
      error => {
        console.log(error);
      }
    );
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
