export interface ITodoItem {
  id: number;
  body: string;
  isCompleted: boolean; 
}  

export interface ITodoList {
  todos: ITodoItem[]
}
