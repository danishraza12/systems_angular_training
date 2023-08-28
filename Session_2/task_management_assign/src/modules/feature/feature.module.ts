import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent],
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent, AddTaskComponent],
})
export class FeatureModule {}
