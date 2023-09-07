import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateFilterPipe } from './pipes/date-filter.pipe';
import { DisableTaskDirective } from './directives/disable-task.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    DateFilterPipe,
    DisableTaskDirective,
    ProfileComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, FormsModule, FeatureRoutingModule],
  exports: [],
})
export class FeatureModule {}
