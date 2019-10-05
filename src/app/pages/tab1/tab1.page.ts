import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private alertController: AlertController, public todoService: TodoService, private router: Router) {}

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
