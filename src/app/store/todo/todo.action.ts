
import { Action }
    from '@ngrx/store';

import { TodoState } from './todo.state';

import Todo from '../../models/todo.model';


export const GET_TODOS = '[Todo] GET_TODOS';

export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';

export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR';

export class GetTodos implements Action {
    readonly type = GET_TODOS;

}

export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS;


    constructor(public payload: TodoState[]) { }
    ;

}

export class GetTodosError implements Action {
    readonly type = GET_TODOS_ERROR;

}

export type All = GetTodos | GetTodosSuccess | GetTodosError;
