import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[Quake]"
})
export class QuakeDirective {
  constructor(public el: ElementRef) {}

  @HostListener("keydown")
  keydown() {
    this.el.nativeElement.style.marginTop = "5px";
  }

  @HostListener("keyup")
  KeyEventsPlugin() {
    this.el.nativeElement.style.marginTop = "0";
  }
}
