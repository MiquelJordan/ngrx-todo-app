import Todo from "../models/todo.model";
import * as uuidv4 from "uuid/v4";

export const mockTodo: Todo[] = [
	{
		id: uuidv4(),
		title: "Do the todo-app",
		isDone: false,
		description: "Do the fantastic Todo exercise",
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn Ngrx",
		isDone: false,
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn hox to do unit test",
		isDone: false,
		description: "It's time to make some test",
		creationDate: new Date()
	},
	{
		id: uuidv4(),
		title: "Learn about devops",
		isDone: true,
		creationDate: new Date()
	}
];
