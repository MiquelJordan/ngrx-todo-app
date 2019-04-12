import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, TodoState } from "src/app/store/todo/todo.state";
import { Observable } from "rxjs";
import * as TodoAction from "../../../store/todo/todo.action";
import { ActivatedRoute, Router } from "@angular/router";
import Todo from "src/app/models/todo.model";
import { tap, map } from "rxjs/operators";
import { MockDataService } from "src/app/services/mock/mock-data.service";
import { TodoService } from "src/app/services/todo/todo.service";

@Component({
	selector: "app-todo-detail",
	templateUrl: "./todo-detail.component.html",
	styleUrls: ["./todo-detail.component.css"]
})
export class TodoDetailComponent implements OnInit {
	selectedTodoId: number;
	AppState: Todo[];
	selectedTodo;

	constructor(
		private store: Store<AppState>,
		private router: ActivatedRoute,
		private route: Router,
		private todoSrv: TodoService
	) {}

	ngOnInit() {
		this.selectedTodoId = this.router.snapshot.params.id;
		if (this.selectedTodoId) {
			this.findSelectedTodo();
		}
	}

	findSelectedTodo() {
		this.todoSrv.getTodo(this.selectedTodoId).subscribe(data => {
			this.selectedTodo = data;
			console.log(data);
		});
	}
	onDeleteTodo() {
		this.store.dispatch(new TodoAction.DeleteTodo(this.selectedTodo));
		this.route.navigateByUrl("../list");
	}
}
