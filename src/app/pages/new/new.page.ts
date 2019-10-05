import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage implements OnInit {
  list: List;
  itemName: string;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('listId');

    this.list = todoService.getList(id);
    console.log(this.list);
  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length > 0) {
      const newItem = new ListItem(this.itemName);

      this.list.tasks.push(newItem);
      this.todoService.saveToStorage();

      this.itemName = '';
    }
  }

  checkChanged(task: ListItem) {
    const pendingCount = this.list.tasks.filter((taskItem: ListItem) => !taskItem.done).length;

    if (pendingCount === 0) {
      this.list.endedAt = new Date();
      this.list.done = true;
    } else {
      this.list.endedAt = null;
      this.list.done = false;
    }

    console.log(this.list);

    this.todoService.saveToStorage();
  }

  deleteItem(idx: number) {
    this.list.tasks.splice(idx, 1);

    this.todoService.saveToStorage();
  }
}
