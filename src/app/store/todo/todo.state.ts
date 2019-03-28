import Todo from "src/app/models/todo.model";

export interface TodoState extends Todo {
	loading: boolean;
	error: boolean;
}

export const initializeTodoState = () => {
	return {
		loading: false,
		error: false
	};
};

export interface TodoListState {
	todos: TodoState[];
	loading: boolean;
}

export const intializeTodoListState = () => {
	return {
		loading: false,
		pending: 0
	};
};
