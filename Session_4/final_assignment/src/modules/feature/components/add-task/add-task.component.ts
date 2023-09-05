import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  closeResult: string = '';
  defaultValue = { createdAt: new Date(), status: false };
  task: any = this.defaultValue;


  newTask$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private modalService: NgbModal, private _sharedService: SharedService) {
    this.newTask$ = this._sharedService.getNewTaskSubject();
  }

  openModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addTask = () => {
    console.log("New added", this.task);
    this.newTask$.next(this.task);
    this.task = this.defaultValue;
    this.modalService.dismissAll();
  };
}
