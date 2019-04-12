import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { map, tap, switchMap, concatMap } from "rxjs/operators";
import * as TodoActions from "./todo.action";
import { TodoService } from "src/app/services/todo/todo.service";
import Todo from "src/app/models/todo.model";

@Injectable()
export class TodoEffects {
	constructor(private todoSrv: TodoService, private actions$: Actions) {}

	@Effect()
	GetTodos$: Observable<Action> = this.actions$.pipe(
		ofType(TodoActions.GET_TODOS),
		switchMap(payload => this.todoSrv.getTodos()),
		map(response => {
			let payload: Todo[] = response as Todo[];
			return new TodoActions.GetTodosSuccess(payload);
		})
	);
	@Effect()
	UpdateTodo$: Observable<Action> = this.actions$.pipe(
		ofType(TodoActions.UPDATE_TODO),
		tap(payload => this.todoSrv.updateTodo(payload)),
		map(payload => {
			return new TodoActions.UpdateTodoSuccess(payload);
		})
	);
	@Effect()
	CreateTodo$: Observable<Action> = this.actions$.pipe(
		ofType(TodoActions.CREATE_TODO),
		concatMap(payload => this.todoSrv.createTodo(payload)),
		map(response => {
			let payload: Todo = response as Todo;
			return new TodoActions.CreateTodoSuccess(payload);
		})
	);
	@Effect()
	DeleteTodo$: Observable<Action> = this.actions$.pipe(
		ofType(TodoActions.DELETE_TODO),
		tap(payload => this.todoSrv.deleteTodo(payload)),
		map(response => {
			return new TodoActions.DeleteTodoSuccess(response);
		})
	);
}
