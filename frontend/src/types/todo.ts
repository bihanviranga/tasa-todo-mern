export interface TodoItem {
  _id: string;
  name: string;
  description?: string;
  completed: boolean;
  favourite?: boolean;
}

export interface TodoItemCreateDto {
  name: string;
  description?: string;
}
