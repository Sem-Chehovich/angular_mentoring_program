import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appBorderChange]'
})
export class BorderChangeDirective {

  @Input('appBorderChange') creationDate: Date | undefined;
  
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.getBorderColor();
  }

  public getBorderColor(): void {
    const datePublication: moment.Moment = moment(this.creationDate);
    const currentDate: moment.Moment = moment();
    const days: number = currentDate.diff(datePublication, 'days');
    if (days <= 14) {
      this.render.addClass(this.el.nativeElement, 'green');
    } 
    if (days < 0) {
      this.render.addClass(this.el.nativeElement, 'blue');
    }
  }
}
