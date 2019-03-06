import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Todo from 'src/app/models/todo.model';
import *  as uuidv4 from 'uuid/v4';
import { Store } from '@ngrx/store';
import { TodoListState, TodoState } from 'src/app/store/todo/todo.state';
import * as TodoAction from '../../../store/todo/todo.action';
import { MockService } from 'src/app/services/mock/mock.service';

@Component({
  selector: 'app-todo-edition',
  templateUrl: './todo-edition.component.html',
  styleUrls: ['./todo-edition.component.css']
})
export class TodoEditionComponent implements OnInit {
  public todoForm: FormGroup
  constructor(
    public dialogRef: MatDialogRef<TodoEditionComponent>,
    private fb: FormBuilder,
    private store: Store<TodoListState>,
    private mockSRV: MockService
  ) { }

  ngOnInit() {
    this.initForm()

  }

  initForm() {
    this.todoForm = this.fb.group({
      title: '',
      description: '',
      statud: '',
      id: '',
      date: ''
    });
  }
  confirm() {
    console.log("submit")
    const formValue = this.todoForm.value;
    const newTodo: TodoState =
    {
      title: formValue['title'],
      description: formValue['description'],
      id: uuidv4(),
      status: false,
      creationDate: new Date,
      error: false,
      loading: false
    }
    this.mockSRV.mockTodo.push(newTodo)
    this.store.dispatch(new TodoAction.CreateTodo(newTodo))
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);

  }


}
