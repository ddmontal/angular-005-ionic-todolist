import { ListItem } from './list-item.model';

export class List {
  id: number;
  title: string;
  createdAt: Date;
  endedAt: Date;
  done: boolean;
  tasks: ListItem[];

  constructor(title: string) {
    this.title = title;

    this.createdAt = new Date();
    this.done = false;
    this.tasks = [];
    this.id = new Date().getTime();
  }
}
