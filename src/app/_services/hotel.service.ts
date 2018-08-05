import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../_models/hotel';
@Injectable()
export class HotelService {

  baseUrl = '';
  productToUpdate = null;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  @Output() change: EventEmitter<Hotel> = new EventEmitter();

  @Output() reload: EventEmitter<any> = new EventEmitter();

  getAll() {
    return this.http.get<any>(this.baseUrl + '/hotels');
  }

  getHotel(hotel: string, stars: string) {

    return this.http.get<any>(this.baseUrl + '/hotels/search/' + hotel + '/stars/' + stars);
  }

  getById(id: string) {
    return this.http.get(this.baseUrl + '/products/' + id);
  }

  create(product: Hotel) {
    return this.http.post(this.baseUrl + '/products', JSON.stringify(product));
  }

  update(product: Hotel, id: any) {
    return this.http.put(this.baseUrl + '/products/' + id, JSON.stringify(product));
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/products/' + id);
  }

  setProductToUpdate(product: Hotel) {
    this.change.emit(product);
    this.productToUpdate = product;
  }

  reloadGrid() {
    this.reload.emit();
  }

  setImageProduct(id: number, data: FormData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'multipart/form-data');
    return this.http.put(this.baseUrl + '/products/' + id + '/pictureFile/detail', data, {headers: headers});

  }

  setImageMenu(id: number, data: FormData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'multipart/form-data');
    return this.http.put(this.baseUrl + '/products/' + id + '/pictureFile/menu', data, {headers: headers});

  }

}
