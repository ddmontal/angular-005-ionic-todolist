import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonelistPipe } from './donelist.pipe';

@NgModule({
  declarations: [DonelistPipe],
  exports: [DonelistPipe],
  imports: [CommonModule]
})
export class PipesModule {}
