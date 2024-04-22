export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export type TodoListType = Todo[];

export interface AppState {
    todoList: TodoListType;
}
