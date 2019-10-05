import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() done: boolean;
  constructor(public todoService: TodoService, private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  selectList(list: List) {
    this.router.navigate(['tabs', this.done ? 'tab2' : 'tab1', 'new', list.id]);
  }

  deleteList(list: List) {
    this.todoService.deleteList(list);
  }
}
