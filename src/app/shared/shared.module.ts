import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
})
export class SharedModule { }
