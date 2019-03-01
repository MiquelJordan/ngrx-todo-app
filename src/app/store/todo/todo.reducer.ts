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
    console.log(state, action);

    switch (action.type) {

        case TodoActions.GET_TODOS: {

            return { ...state, loaded: false, loading: true };
        }


        case TodoActions.GET_TODOS_SUCCESS: {

            return {
                ...state,
                todos: [
                    ...action.payload,
                    defaultTodoStates[0]
                ],
                loading: false
            };
        }


    }
}
