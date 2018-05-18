import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  constructor(private readonly element: ElementRef) { }

  @Output() clickOutside = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const id = targetElement.attributes.getNamedItem('id');
    if ((id !== null &&
      typeof id !== 'undefined' &&
      id.value === 'show-settings') ||
      this.element.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(true);
    } else {
      this.clickOutside.emit(false);
    }
  }
}
