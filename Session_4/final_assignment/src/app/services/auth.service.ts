import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiBaseUrl + 'auth/login';

  constructor(private _http: HttpClient) {}

  login(authInfo: any): Observable<any[]> {
    return this._http.post<any>(`${this.apiUrl}`, authInfo);
  }
}
