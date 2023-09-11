import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'product', canActivate: [AuthGuard], component: ProductComponent },
  { path: 'category', canActivate: [AuthGuard], component: CategoryComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
