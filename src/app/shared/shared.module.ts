import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BorderChangeDirective } from './directives/border-change.directive';

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    BorderChangeDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    BorderChangeDirective
  ],
})
export class SharedModule { }
