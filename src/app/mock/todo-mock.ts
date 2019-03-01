import Todo from '../models/todo.model';
import { TodoState } from '../store/todo/todo.state';

export const mockTodo: TodoState[] = [
    {
        title: "Do the todo-app",
        status: false,
        loading: false,
        error: false
    },
    {
        title: "Learn Ngrx",
        status: false,
        loading: false,
        error: false
    },
    {
        title: "Learn hox to do unit test",
        status: false,
        loading: false,
        error: false
    },
    {
        title: "Learn about devops",
        status: true,
        loading: false,
        error: false
    }
]