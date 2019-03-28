import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoListState, TodoState } from "src/app/store/todo/todo.state";
import { Observable } from "rxjs";
import * as TodoAction from "../../../store/todo/todo.action";
import { ActivatedRoute } from "@angular/router";
import Todo from "src/app/models/todo.model";
import { tap } from "rxjs/operators";

@Component({
	selector: "app-todo-detail",
	templateUrl: "./todo-detail.component.html",
	styleUrls: ["./todo-detail.component.css"]
})
export class TodoDetailComponent implements OnInit {
	selectedTodoId: string;
	todoListState: Todo[];
	selectedTodo: Todo;

	constructor(
		private store: Store<TodoListState>,
		private router: ActivatedRoute
	) {
		this.selectedTodoId = this.router.snapshot.params.id;
	}

	ngOnInit() {
		this.findSelectedTodo();
	}

	findSelectedTodo() {
		this.store.dispatch(new TodoAction.GetTodos());
		this.store
			.select(state => state)
			.subscribe(state => {
				const todos = state.todos.todos;
				this.selectedTodo = todos.find(todo => todo.id === this.selectedTodoId);
			});

		console.log(this.selectedTodoId);

		console.log(this.todoListState);

		// this.todoListState$.subscribe(data => {
		// 	let todoState = data.todos;
		// 	console.log(todoState);
		// });
	}
}
