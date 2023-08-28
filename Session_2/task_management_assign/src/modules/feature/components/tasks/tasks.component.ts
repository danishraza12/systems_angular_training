import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks = [
    { id: 1, description: 'Deploy silent notification IOS fix', createdAt: new Date().toJSON().slice(0, 10), isDone: true },
    { id: 2, description: 'Completed Angular training assignment', createdAt: new Date().toJSON().slice(0, 10), isDone: false },
  ];

  allTasks = () => {
    console.log(this.tasks);
  };
}
