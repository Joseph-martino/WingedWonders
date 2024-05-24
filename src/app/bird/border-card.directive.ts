import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[birdBorderCard]'
})
export class BorderCardDirective {

  private defaultColor: string = "#f5f5f5";

  constructor(private element: ElementRef) { 
    this.setHeight(300);
    this.setWeight(600);
    this.setBorderColour(this.defaultColor);
  }

  @Input('birdBorderCard') borderColor!: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColour("#4F9BED");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColour(this.defaultColor);
  }

  setHeight(height: number){
    this.element.nativeElement.style.height = `${height}px`;
  }

  setWeight(weight: number){
    this.element.nativeElement.style.weight = `${weight}px`
  }

  setBorderColour(colour: string){
    this.element.nativeElement.style.border = `solid 4px ${colour}`;
  }

}
