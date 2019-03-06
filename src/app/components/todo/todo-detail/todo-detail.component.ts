import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListState, TodoState } from 'src/app/store/todo/todo.state';
import { Observable } from 'rxjs';
import * as TodoAction from '../../../store/todo/todo.action';
import { ActivatedRoute } from '@angular/router';
import Todo from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(
    private store: Store<TodoListState>,
    private router: ActivatedRoute
  ) { }
  todoListState$: Observable<TodoState[]>;
  selectedTodo
  ngOnInit() {

    this.todoListState$ = this.store.select(state => state.todos);
    this.store.dispatch(new TodoAction.GetTodos());
    let params = this.router.snapshot.params.id
    console.log(params)
    let todos = this.todoListState$.forEach((data) => {
      data["todos"].map((todo) => {

        if (todo["id"] == params) {

          this.selectedTodo = todo
        }
      })


    })



  }
}
