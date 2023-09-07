import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

interface IAuth {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authInfo: IAuth;

  constructor(private _authService: AuthService, private _router: Router) {
    this.authInfo = {};
  }

  login = () => {
    console.log('Login Payload', this.authInfo);
    this._authService.login(this.authInfo).subscribe((data: any) => {
      if (data) {
        console.log('Login Response', data);
        localStorage.setItem('access_token', data.access_token);
        this._router.navigate(['profile']);
      }
    });
  };
}
