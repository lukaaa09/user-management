import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>()

  constructor(private el: ElementRef) { }
  @HostListener('document:click', ['$event.target'])

  public onCLick(target: any) {
    const clickInside = this.el.nativeElement.contains(target)
    if (!clickInside) {
      this.clickOutside.emit(target)
    }
  }

}
