import Todo from "../models/todo.model";

export const mockTodo: Todo[] = [
	{
		id: 0,
		title: "Do the todo-app 2",
		isDone: false,
		description: "Do the fantastic Todo exercise",
		creationDate: new Date()
	},
	{
		id: 1,
		title: "Learn Ngrx2",
		isDone: false,
		creationDate: new Date()
	},
	{
		id: 2,
		title: "Learn hox to do unit test2",
		isDone: false,
		creationDate: new Date()
	},
	{
		id: 3,
		title: "Learn about devops",
		isDone: true,
		creationDate: new Date()
	}
];
