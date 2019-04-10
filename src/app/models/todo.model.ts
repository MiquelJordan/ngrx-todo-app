export default interface Todo {
	id: number;
	title: string;
	isDone: boolean;
	description?: string;
	creationDate: Date;
}
