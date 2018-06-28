import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Rainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string; 

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  constructor() { }

  @HostListener('keydown') selectColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}
