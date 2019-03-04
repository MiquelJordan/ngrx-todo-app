import { TodoListState, TodoState } from '../../../store/todo/todo.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as TodoAction from '../../../store/todo/todo.action';
import { TouchSequence } from 'selenium-webdriver';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(
    private store: Store<TodoListState>
  ) { }
  todoListState$: Observable<TodoState[]>;

  ngOnInit() {

    this.todoListState$ = this.store.select(state => state.todos);
    this.store.dispatch(new TodoAction.GetTodos());

  }
  onSelected(todoId, todoStatus) {
    console.log("oncheck", todoId, todoStatus)
    if (todoStatus == false) {
      todoStatus = true
    }
    else if (todoStatus == true) {
      todoStatus = false
    }
    this.store.dispatch(new TodoAction.UpdateTodo({ status: todoStatus, id: todoId }));

  }
}
