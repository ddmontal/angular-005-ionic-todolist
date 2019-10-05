import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @ViewChild(IonList, {static: false}) list: IonList;
  @Input() done: boolean;
  constructor(public todoService: TodoService, private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  selectList(list: List) {
    this.router.navigate(['tabs', this.done ? 'tab2' : 'tab1', 'new', list.id]);
  }

  deleteList(list: List) {
    this.todoService.deleteList(list);
  }

  async editListName(list: List) {
    // this.router.navigateByUrl('/tabs/tab1/new');
    const alert = await this.alertController.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Edit',
          handler: data => {
            list.title = data.title;
            this.todoService.saveToStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }
}
