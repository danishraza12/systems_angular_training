import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _apiUrl = environment.apiBaseUrl + 'auth/profile';

  constructor(private _http: HttpClient) {}

  getProfile(): Observable<any[]> {
    return this._http.get<any>(`${this._apiUrl}`);
  }
}
