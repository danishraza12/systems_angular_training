import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableTask]',
})
export class DisableTaskDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray', 'white');
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', "true");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  highlight(bgColor: string, color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
