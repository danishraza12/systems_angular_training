import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks = [
    {
      id: 1,
      description: 'Deploy silent notification IOS fix',
      createdAt: new Date(),
      isDone: true,
    },
    {
      id: 2,
      description: 'Complete Angular training assignment',
      createdAt: new Date(),//.toJSON().slice(0, 10),
      isDone: false,
    },
  ];

  newTask$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private _sharedService: SharedService) {
    this.newTask$ = this._sharedService.getNewTaskSubject();

    this.newTask$.subscribe((value) => {
      console.log('New Task Subject', value);
      if (Object.keys(value).length > 0) {
        this.tasks.push(value);
      }
    });
  }

  allTasks = () => {
    console.log(this.tasks);
  };
}
