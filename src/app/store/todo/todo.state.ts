import Todo from "src/app/models/todo.model";

export interface TodoState {
	todos: Todo[];
}

export const initializeTodoState = () => {
	return {
		loading: false,
		error: false
	};
};

export interface TodoListState {
	todos: TodoState;
	loading: boolean;
}

export const intializeTodoListState = () => {
	return {
		loading: false,
		pending: 0
	};
};
