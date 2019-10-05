import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lists: List[];

  constructor() {
    this.lists = [];
    this.loadFromStorage();
  }

  createList(title: string): number {
    const list: List = new List(title);

    this.lists.push(list);
    this.saveToStorage();

    return list.id;
  }

  getList(listId: number | string): List {
    const id: number = Number(listId);

    return this.lists.find(list => list.id === id);
  }

  deleteList(list: List) {
    this.lists = this.lists.filter(list => list.id !== list.id);

    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  loadFromStorage() {
    if (localStorage.getItem('lists')) {
      this.lists = JSON.parse(localStorage.getItem('lists'));
    } else {
      // const list1 = new List('Collect all Infinity Stones');
      // const list2 = new List('Heroes');
      // this.lists.push(list1, list2);
    }
  }
}
