import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BovineService {

  private baseUrl = 'http://localhost:8080/aim/api/v1/bovine';

  constructor(private http: HttpClient) { }

  getBovine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createBovine(bovine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bovine);
  }

  // tslint:disable-next-line:ban-types
  updateBovine(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBovine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBovinesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBovineById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

}
