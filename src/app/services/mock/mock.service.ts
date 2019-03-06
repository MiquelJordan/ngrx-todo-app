import { Injectable } from '@angular/core';

import { TodoState } from 'src/app/store/todo/todo.state';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import *  as uuidv4 from 'uuid/v4';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  public mockTodo: TodoState[] = [
    {
      id: uuidv4(),
      title: "Do the todo-app 2",
      status: false,
      loading: false,
      error: false,
      description: "Do the fantastic Todo exercise",
      creationDate: new Date
    },
    {
      id: uuidv4(),
      title: "Learn Ngrx2",
      status: false,
      loading: false,
      error: false,
      creationDate: new Date
    },
    {
      id: uuidv4(),
      title: "Learn hox to do unit test2",
      status: false,
      loading: false,
      error: false,
      creationDate: new Date
    },
    {
      id: uuidv4(),
      title: "Learn about devops",
      status: true,
      loading: false,
      error: false,
      creationDate: new Date
    }
  ]


  constructor() { }

  getMockTodos() {
    return of(this.mockTodo)

  }
}
