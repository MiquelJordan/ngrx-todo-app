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
  params: any;

  constructor(
    private store: Store<TodoListState>,
    private router: ActivatedRoute
  ) { 
    this.params = this.router.snapshot.params.id
  }
  todoListState$: Observable<TodoState[]>;
  selectedTodo
  ngOnInit() {

    this.todoListState$ = this.store.select(state => state.todos);
    this.store.dispatch(new TodoAction.GetTodos());
    console.log(this.params)
    this.todoListState$.forEach((data) => {
      data["todos"].map((todo) => {

        if (todo["id"] == this.params) {
          this.selectedTodo = todo
        }
      })


    })



  }
}
