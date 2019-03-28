export default interface Todo {
    id: string
    title: string;
    isDone: boolean;
    description?: string;
    creationDate: Date
}