import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Todo from "src/app/models/todo.model";

@Injectable({
	providedIn: "root"
})
export class TodoService {
	SERVER_URL: string = "http://localhost:8080/api/";
	constructor(private httpClient: HttpClient) {}

	public getTodos() {
		return this.httpClient.get(this.SERVER_URL + "todos");
	}

	public getTodo(todoId) {
		return this.httpClient.get(`${this.SERVER_URL + "todos"}/${todoId}`);
	}
	public createTodo(payload) {
		let todo: Todo = payload.payload;
		return this.httpClient.post(`${this.SERVER_URL}` + "todos", { ...todo });
	}

	public deleteTodo(todoId) {
		this.httpClient
			.delete(`${this.SERVER_URL + "todos"}/${todoId.payload.id}`)
			.subscribe(() => {});
	}
	public updateTodo(payload) {
		let todo: Todo = payload.payload;
		return this.httpClient.put(`${this.SERVER_URL + "todos"}/${todo}`, {
			...todo
		});
	}
}
