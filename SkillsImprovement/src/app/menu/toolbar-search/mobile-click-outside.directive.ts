import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[mobileClickOutside]'
})
export class MobileClickOutsideDirective {
  constructor(private readonly element: ElementRef) { }

  @Output() mobileClickOutside = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const id = targetElement.attributes.getNamedItem('id');
    if (id !== null &&
      typeof id !== 'undefined' &&
      id.value === 'close') {
      this.mobileClickOutside.emit(false);
    } else if (this.element.nativeElement.contains(targetElement)) {
      this.mobileClickOutside.emit(true);
    } else {
      this.mobileClickOutside.emit(false);
    }
  }
}
