import { Directive, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[appDropdowntoggle]'
})
export class DropdowntoggleDirective {

  //HostListener es como un Event Binding pero para directivas
  @HostListener('click', ['$event']) //aqui esta escuchando el evento click
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
  constructor(private dropdown: DropdownDirective) { }

}