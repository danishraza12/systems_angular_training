import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { DisableTaskDirective } from './directives/disable-task.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent,
    DateFilterPipe,
    DisableTaskDirective,
    ProfileComponent,
  ],
  imports: [CommonModule, FormsModule, FeatureRoutingModule],
  exports: [TasksComponent, AddTaskComponent],
})
export class FeatureModule {}
