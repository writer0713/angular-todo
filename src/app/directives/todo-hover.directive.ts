import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[TodoHover]'
})
export class TodoHoverDirective {

  defaultColor: string;
  @Input() color: string;

  constructor(
    public el: ElementRef
  ) { 
    console.log(this.el);
  }

  ngOnInit() {
    this.defaultColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

}
