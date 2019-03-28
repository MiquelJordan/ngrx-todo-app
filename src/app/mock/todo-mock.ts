import Todo from "../models/todo.model";
import { TodoState } from "../store/todo/todo.state";
import * as uuidv4 from "uuid/v4";

export const mockTodo: TodoState[] = [
	{
		id: uuidv4(),
		title: "Do the todo-app",
		isDone: false,
		loading: false,
		error: false,
		description: "Do the fantastic Todo exercise",
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn Ngrx",
		isDone: false,
		loading: false,
		error: false,
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn hox to do unit test",
		isDone: false,
		loading: false,
		error: false,
		description: "It's time to make some test",
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn about devops",
		isDone: true,
		loading: false,
		error: false,
		creationDate: new Date()
	}
];
