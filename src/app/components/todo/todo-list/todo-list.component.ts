import { TodoListState, TodoState } from "../../../store/todo/todo.state";
import { Store, resultMemoize } from "@ngrx/store";
import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as TodoAction from "../../../store/todo/todo.action";
import { TouchSequence } from "selenium-webdriver";
import { ModalService } from "src/app/services/modal/modal.service";
import { tap } from "rxjs/operators";
import Todo from "src/app/models/todo.model";

@Component({
	selector: "app-todo-list",
	templateUrl: "./todo-list.component.html",
	styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
	constructor(
		private store: Store<TodoListState>,
		private modalSrv: ModalService
	) {}
	todoListState$: Observable<TodoState>;

	ngOnInit() {
		this.todoListState$ = this.store
			.select(state => state.todos)
			.pipe(
				tap(result => {
					console.log("result", result),
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
		this.store.dispatch(new TodoAction.GetTodos());
	}
	onSelected(todoId, todoisDone) {
		console.log("oncheck", todoId, todoisDone);
		if (todoisDone === false) {
			todoisDone = true;
		} else if (todoisDone === true) {
			todoisDone = false;
		}
		this.store.dispatch(
			new TodoAction.UpdateTodo({ isDone: todoisDone, id: todoId })
		);
	}
	onNewTodo() {
		this.modalSrv.openTodoEdition();
	}
}
