import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/todo/todo.state";
import * as TodoAction from "../../../store/todo/todo.action";

@Component({
	selector: "app-todo-edition",
	templateUrl: "./todo-edition.component.html",
	styleUrls: ["./todo-edition.component.css"]
})
export class TodoEditionComponent implements OnInit {
	public todoForm: FormGroup;
	private todosLength;
	constructor(
		public dialogRef: MatDialogRef<TodoEditionComponent>,
		private fb: FormBuilder,
		private store: Store<AppState>
	) {}

	ngOnInit() {
		this.initForm();
	}
	getTodosLength() {
		this.store
			.select(state => state.todoState.todos.length)
			.subscribe(state => {
				this.todosLength = state;
			});
	}

	initForm() {
		this.getTodosLength();
		this.todoForm = this.fb.group({
			title: ["", Validators.required],
			description: "",
			id: this.todosLength,
			isDone: false,
			creationDate: new Date(),
			error: false,
			loading: false
		});
	}
	confirm() {
		this.store.dispatch(new TodoAction.CreateTodo(this.todoForm.value));
		this.dialogRef.close(true);
	}
	cancel() {
		this.dialogRef.close(false);
	}
}
