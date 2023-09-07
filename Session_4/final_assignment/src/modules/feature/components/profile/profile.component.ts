import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((data) => {
      console.log('Profile Data', data);
      this.profile = data;
    });
  }

  constructor(private _profileService: ProfileService) {}
}
