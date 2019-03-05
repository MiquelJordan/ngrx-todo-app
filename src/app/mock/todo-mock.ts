import Todo from '../models/todo.model';
import { TodoState } from '../store/todo/todo.state';

export const mockTodo: TodoState[] = [
    {
        id: 5,
        title: "Do the todo-app",
        status: false,
        loading: false,
        error: false,
        description: "Do the fantastic Todo exercise"

    },
    {
        id: 6,
        title: "Learn Ngrx",
        status: false,
        loading: false,
        error: false
    },
    {
        id: 7,
        title: "Learn hox to do unit test",
        status: false,
        loading: false,
        error: false,
        description: "It's time to make some test"
    },
    {
        id: 8,
        title: "Learn about devops",
        status: true,
        loading: false,
        error: false
    }
]