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

export interface AppState {
	todoState: TodoState;
	loading: boolean;
}

export const intializeAppState = () => {
	return {
		loading: false,
		pending: 0
	};
};
