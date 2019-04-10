import Todo from "../../models/todo.model";
import { TodoState } from "./todo.state";
import * as TodoActions from "./todo.action";
import { mockTodo } from "src/app/mock/todo-mock";

export type Action = TodoActions.All;

const defaultTodoStates: Todo[] = [...mockTodo];

const defaultState: TodoState = {
	todos: [...mockTodo]
};

export function TodoReducer(state: TodoState = defaultState, action: Action) {
	console.log("todo reducer", state, action);

	switch (action.type) {
		case TodoActions.GET_TODOS: {
			return {
				...state,
				loaded: false,
				loading: true
			};
		}

		case TodoActions.GET_TODOS_SUCCESS: {
			return {
				...state,
				todos: [...action.payload, ...state.todos],
				loading: false
			};
		}
		case TodoActions.UPDATE_TODO: {
			return {
				...state,
				loading: true,
				loaded: false
			};
		}
		case TodoActions.UPDATE_TODO_FAIL: {
			return state;
		}

		case TodoActions.UPDATE_TODO_SUCCESS: {
			const todoUpdate = state.todos.map(todo => {
				if (todo.id === action.payload.payload.id) {
					todo.isDone = action.payload.payload.isDone;
					return todo;
				} else {
					return todo;
				}
			});
			console.log(todoUpdate);
			return {
				...state,
				todos: [...todoUpdate],
				loaded: true,
				loading: false
			};
		}

		case TodoActions.CREATE_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case TodoActions.CREATE_TODO_SUCCESS:
			return {
				...state
			};
		case TodoActions.DELETE_TODO:
			let todoUpdate: Todo[] = [];
			state.todos.map(todo => {
				if (todo.id == action.payload.id) {
					console.log("Delete");
				} else {
					console.log(todo);
					todoUpdate.push(todo);
				}
			});
			return {
				...state,
				todos: [...todoUpdate]
			};
		case TodoActions.DELETE_TODO_SUCCESS:
			return {
				...state
			};
	}
}
