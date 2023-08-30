import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { DisableTaskDirective } from './directives/disable-task.directive';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, DateFilterPipe, DisableTaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent, AddTaskComponent],
})
export class FeatureModule {}
