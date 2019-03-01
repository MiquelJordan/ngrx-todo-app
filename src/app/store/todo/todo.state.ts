import Todo from 'src/app/models/todo.model';


export interface TodoState extends Todo {
    loading: boolean;
    error: boolean;
}

export const initializeTodoState = function () {
    return {
        loading: false,
        error: false,
    }
}

export interface TodoListState {
    todos: TodoState[];
    loading: boolean;

}

export const intializeTodoListState = function () {
    return {
        loading: false,
        pending: 0,
    }
}