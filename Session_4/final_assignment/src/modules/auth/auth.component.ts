import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

interface IAuth {
  email?: string,
  password?: string,
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authInfo: IAuth;

  constructor(private _authService: AuthService) {
    this.authInfo = {};
  }

  login = () => {
    console.log("Login", this.authInfo);
    this._authService.login(this.authInfo).subscribe((data: any) => {
      console.log("Login Response", data);
    });
  }
}
