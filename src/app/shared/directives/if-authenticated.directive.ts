import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective {
  
  @Input('appIfAuthenticated') public status!: boolean | null;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

 ngOnChanges(): void {
    if (this.status) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
