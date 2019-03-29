import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, TodoState } from "src/app/store/todo/todo.state";
import { Observable } from "rxjs";
import * as TodoAction from "../../../store/todo/todo.action";
import { ActivatedRoute, Router } from "@angular/router";
import Todo from "src/app/models/todo.model";
import { tap } from "rxjs/operators";

@Component({
	selector: "app-todo-detail",
	templateUrl: "./todo-detail.component.html",
	styleUrls: ["./todo-detail.component.css"]
})
export class TodoDetailComponent implements OnInit {
	selectedTodoId: string;
	AppState: Todo[];
	selectedTodo: Todo;

	constructor(
		private store: Store<AppState>,
		private router: ActivatedRoute,
		private route: Router
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
				const todos = state.todoState.todos;
				this.selectedTodo = todos.find(todo => todo.id === this.selectedTodoId);
			});
	}
	onDeleteTodo() {
		this.store.dispatch(new TodoAction.DeleteTodo(this.selectedTodo));
		this.route.navigateByUrl("../list");
	}
}
