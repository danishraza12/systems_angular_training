import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';

  constructor(private _http: HttpClient) {}

  login(authInfo: any): Observable<any[]> {
    return this._http.post<any>(`${this.apiUrl}`, authInfo);
  }
}
