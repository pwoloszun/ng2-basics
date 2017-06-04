import { Todo } from './todo.model';

export enum TodoEditStatus {UPDATE, CANCEL}

export interface TodoEditEvent {
  todo: Todo;
  title?: string;
  description?: string;
  status: TodoEditStatus;
}
