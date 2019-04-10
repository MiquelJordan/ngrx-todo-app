import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import * as uuidv4 from "uuid/v4";
import Todo from "src/app/models/todo.model";
@Injectable({
	providedIn: "root"
})
export class MockService {
	public mockTodo: Todo[] = [];

	constructor() {}

	getMockTodos() {
		return of(this.mockTodo);
	}
	addMockTodo(todo) {
		this.mockTodo.push(todo);
	}
	deleteMockTodo(todo) {
		const todoIndex = this.mockTodo.findIndex(td => td.id === todo.id);
		this.mockTodo.splice(todoIndex, 1);
	}
}
