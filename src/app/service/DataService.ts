import { Injectable } from '@angular/core';
import { Service } from '../model/Service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private urlServices = '../assets/services.json';
  private urlProducts = '../assets/products.json';

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.urlServices);
  }
  getProjects(): Observable<Products[]> {
    return this.http.get<Products[]>(this.urlProducts);
  }
}
