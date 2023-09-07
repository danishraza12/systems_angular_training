import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _newTask: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  getNewTaskSubject(): BehaviorSubject<any> {
    return this._newTask;
  }
}
