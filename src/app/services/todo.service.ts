import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lists: List[];

  constructor() {
    console.log('Initialized service');
  }
}
