import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoListState, TodoState } from "src/app/store/todo/todo.state";
import { Observable } from "rxjs";
import * as TodoAction from "../../../store/todo/todo.action";
import { ActivatedRoute } from "@angular/router";
import Todo from "src/app/models/todo.model";

@Component({
	selector: "app-todo-detail",
	templateUrl: "./todo-detail.component.html",
	styleUrls: ["./todo-detail.component.css"]
})
export class TodoDetailComponent implements OnInit {
	selectedTodoId: any;
	todoListState$: Observable<TodoState[]>;
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
		this.todoListState$ = this.store.select(state => state.todos);
		this.store.dispatch(new TodoAction.GetTodos());
		console.log(this.selectedTodoId);
		this.todoListState$.forEach((data: Todo[]) => {
			this.selectedTodo = data["todo"].find(
				todo => todo.id === this.selectedTodoId
			);
		});
	}
}
