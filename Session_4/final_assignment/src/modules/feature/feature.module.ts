import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateFilterPipe } from './pipes/date-filter.pipe';
import { DisableTaskDirective } from './directives/disable-task.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { FeatureRoutingModule } from './feature.routing.module';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    DateFilterPipe,
    DisableTaskDirective,
    ProfileComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, FormsModule, FeatureRoutingModule, AdminModule],
  exports: [],
})
export class FeatureModule {}
