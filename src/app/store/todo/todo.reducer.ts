import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state';
import * as TodoActions from './todo.action';
import { mockTodo } from 'src/app/mock/todo-mock';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
    ...mockTodo
]


const defaultState: TodoListState = {
    todos: [...mockTodo],
    loading: false,

}

export function TodoReducer(state = defaultState, action: Action) {
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
                todos: [
                    ...action.payload,
                    ...defaultTodoStates
                ],
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
            let todo = state.todos.map(todo => {
                if (todo.id == action.payload.payload.id) {
                    todo.status = action.payload.payload.status;
                    return action.payload;
                } else {
                    return todo;
                }

            });
            return {
                ...state,
                todo,
                loaded: true,
                loading: false
            };
        }


    }
}
