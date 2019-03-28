import { Action } from "@ngrx/store";

import Todo from "../../models/todo.model";
export const GET_TODOS = "[Todo] GET_TODOS";
export const GET_TODOS_SUCCESS = "[Todo] GET_TODOS_SUCCESS";
export const UPDATE_TODO = "[Todo] UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "[Todo] UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAIL = "[Todo] UPDATE_TODO_FAIL";

export const CREATE_TODO = "[todoList] CREATE_TODO";
export const CREATE_TODO_SUCCESS = "[todoList] CREATE_TODO_SUCCESS";
export class GetTodos implements Action {
	readonly type = GET_TODOS;
	constructor() {}
}

export class GetTodosSuccess implements Action {
	readonly type = GET_TODOS_SUCCESS;

	constructor(public payload: Todo[]) {}
}
export class UpdateTodo implements Action {
	readonly type = UPDATE_TODO;
	constructor(public payload: any) {}
}

export class UpdateTodoFail implements Action {
	readonly type = UPDATE_TODO_FAIL;
}

export class UpdateTodoSuccess implements Action {
	readonly type = UPDATE_TODO_SUCCESS;
	constructor(public payload: any) {}
}

export class CreateTodo {
	readonly type = CREATE_TODO;
	constructor(public payload: Todo) {}
}
export class CreateTodoSuccess implements Action {
	readonly type = CREATE_TODO_SUCCESS;
}

export type All =
	| GetTodos
	| GetTodosSuccess
	| UpdateTodo
	| UpdateTodoFail
	| UpdateTodoSuccess
	| CreateTodo
	| CreateTodoSuccess;
