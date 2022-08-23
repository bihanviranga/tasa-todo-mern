export interface TodoItem {
  _id: string;
  name: string;
  description?: string;
  completed: boolean;
  favourite?: boolean;
}

export interface TodoItemCreateUpdateDto {
  name: string;
  description?: string;
}
