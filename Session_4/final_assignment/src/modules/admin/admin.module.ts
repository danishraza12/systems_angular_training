import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent, UsersComponent],
})
export class AdminModule { }
