import { Injectable } from '@angular/core';

import { TodoState } from 'src/app/store/todo/todo.state';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  public mockTodo: TodoState[] = [
    {
      id: 1,
      title: "Do the todo-app 2",
      status: false,
      loading: false,
      error: false
    },
    {
      id: 2,
      title: "Learn Ngrx2",
      status: false,
      loading: false,
      error: false
    },
    {
      id: 3,
      title: "Learn hox to do unit test2",
      status: false,
      loading: false,
      error: false
    },
    {
      id: 4,
      title: "Learn about devops",
      status: true,
      loading: false,
      error: false
    }
  ]


  constructor() { }

  getMockTodos() {
    return of(this.mockTodo)

  }
}
