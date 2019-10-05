import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'donelist',
  pure: false
})
export class DonelistPipe implements PipeTransform {
  transform(lists: List[], done: boolean = true): List[] {
    return lists.filter(list => list.done === done);
  }
}
