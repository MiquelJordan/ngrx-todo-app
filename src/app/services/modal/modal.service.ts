
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodoEditionComponent } from 'src/app/components/todo/todo-edition/todo-edition.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openTodoEdition() {
    return this.dialog.open(TodoEditionComponent, {
      width: '80vw',
      disableClose: true
    }).afterClosed();
  }
}