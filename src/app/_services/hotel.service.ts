import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../_models/hotel';
@Injectable()
export class HotelService {

  baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getAll() {
    return this.http.get<any>(this.baseUrl + '/hotels');
  }

  getHotel(hotel: string, stars: string) {

    return this.http.get<any>(this.baseUrl + '/hotels/search/' + hotel + '/stars/' + stars);
  }
}
