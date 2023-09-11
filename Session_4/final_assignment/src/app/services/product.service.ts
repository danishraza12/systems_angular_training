import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _apiUrl = environment.apiBaseUrl + 'products/';

  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this._http.get<any>(`${this._apiUrl}`);
  }

  getOne(id: number): Observable<any[]> {
    return this._http.get<any>(`${this._apiUrl}${id}`);
  }

  create(data: any): Observable<any[]> {
    return this._http.post<any>(`${this._apiUrl}`, data);
  }

  update(id: number, data: any): Observable<any[]> {
    return this._http.put<any>(`${this._apiUrl}${id}`, data);
  }

  getPaginated(limit: number, offset: number): Observable<any[]> {
    return this._http.get<any>(
      `${this._apiUrl}?offset=${offset}&limit=${limit}`
    );
  }
}
