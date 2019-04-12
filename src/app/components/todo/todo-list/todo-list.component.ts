import { AppState, TodoState } from "../../../store/todo/todo.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as TodoAction from "../../../store/todo/todo.action";
import { tap, find } from "rxjs/operators";
import { TodoEditionComponent } from "../todo-edition/todo-edition.component";
import { MatDialog } from "@angular/material";

@Component({
	selector: "app-todo-list",
	templateUrl: "./todo-list.component.html",
	styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
	constructor(private store: Store<AppState>, private dialog: MatDialog) {}
	todoListState$: Observable<TodoState>;

	ngOnInit() {
		this.store.dispatch(new TodoAction.GetTodos());
		this.todoListState$ = this.store
			.select(state => state.todoState)
			.pipe(
				tap(result => {
					result.todos.sort((a, b) => {
						if (a.creationDate > b.creationDate) {
							return -1;
						}
						if (a.creationDate < b.creationDate) {
							return 1;
						}
						return 0;
					});
				})
			);
	}

	onSelected(todoId, todoIsDone) {
		todoIsDone = !todoIsDone;

		let todoUpdated;

		this.store
			.select(state => state.todoState.todos)
			.subscribe(data => {
				todoUpdated = data.find(todo => todo.id == todoId);
				todoUpdated.isDone = todoIsDone;
			});
		this.store.dispatch(new TodoAction.UpdateTodo(todoUpdated));
	}

	onNewTodo() {
		this.dialog
			.open(TodoEditionComponent, {
				width: "80vw",
				disableClose: true
			})
			.afterClosed();
	}
}
