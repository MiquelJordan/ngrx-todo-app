import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import * as uuidv4 from "uuid/v4";
import Todo from "src/app/models/todo.model";
@Injectable({
	providedIn: "root"
})
export class MockService {
	public mockTodo: Todo[] = [
		{
			id: uuidv4(),
			title: "Do the todo-app 2",
			isDone: false,
			description: "Do the fantastic Todo exercise",
			creationDate: new Date()
		},
		{
			id: uuidv4(),
			title: "Learn Ngrx2",
			isDone: false,
			creationDate: new Date()
		},
		{
			id: uuidv4(),
			title: "Learn hox to do unit test2",
			isDone: false,
			creationDate: new Date()
		},
		{
			id: uuidv4(),
			title: "Learn about devops",
			isDone: true,
			creationDate: new Date()
		}
	];

	constructor() {}

	getMockTodos() {
		return of(this.mockTodo);
	}
	addMockTodo(todo) {
		this.mockTodo.push(todo);
	}
	deleteMockTodo(todo) {
		let todoIndex = this.mockTodo.findIndex(td => td.id === todo.id);
		this.mockTodo.splice(todoIndex, 1);
	}
}
