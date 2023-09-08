import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      console.log('Users', data);
      this.users = data;
    });
  }

  constructor(private _userService: UserService) {}

  getOne(id: number) {
    this._userService.getOne(id).subscribe((data) => {
      console.log('fetched user', data);
    });
  }

  create(data: any) {
    this._userService.create(data).subscribe((data) => {
      console.log('created user', data);
    });
  }

  update(id: number, data: any) {
    this._userService.update(id, data).subscribe((data) => {
      console.log('updated user', data);
    });
  }

  getPaginated(limit: number, offset: number) {
    this._userService.getPaginated(limit, offset).subscribe((data) => {
      console.log('paginated users', data);
      this.users = data;
    });
  }
}
