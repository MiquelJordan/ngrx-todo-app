import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import Todo from "src/app/models/todo.model";

@Injectable({
	providedIn: "root"
})
export class MockDataService implements InMemoryDbService {
	constructor() {}

	createDb() {
		let todos: Todo[] = [
			{
				id: 0,
				title: "Do the todo-app ",
				isDone: false,
				description: "Do the fantastic Todo exercise",
				creationDate: new Date()
			},
			{
				id: 1,
				title: "Learn Ngrx",
				isDone: false,
				creationDate: new Date()
			},
			{
				id: 2,
				title: "Learn hox to do unit test",
				isDone: false,
				creationDate: new Date()
			},
			{
				id: 3,
				title: "Learn about devops",
				isDone: true,
				creationDate: new Date()
			}
		];

		return { todos };
	}
}
