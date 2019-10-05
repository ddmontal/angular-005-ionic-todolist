import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public todoService: TodoService, private router: Router, private alertController: AlertController) {}

  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/new');
    const alert = await this.alertController.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.router.navigate(['tabs', 'tab1', 'new', this.todoService.createList(data.title)]);
          }
        }
      ]
    });

    await alert.present();
  }
}
