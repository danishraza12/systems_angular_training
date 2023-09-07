import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _apiUrl = 'https://api.escuelajs.co/api/v1/auth/profile';

  constructor(private _http: HttpClient) {}

  getProfile(): Observable<any[]> {
    return this._http.get<any>(`${this._apiUrl}`);
  }
}
