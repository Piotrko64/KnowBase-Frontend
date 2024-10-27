import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

const SHOW_TOOLTIP_TIMEOUT = 200;
const HIDE_TOOLTIP_TIMEOUT = 300;

@Directive({
  selector: '[customTooltip]',
  standalone: true,
})
export class CustomTooltipDirective {
  @Input('customTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltipText),
    );

    this.renderer.appendChild(document.body, this.tooltipElement);
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    const { left, top, width } = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipElement,
      'top',
      `${top + window.scrollY - 30}px`,
    );
    this.renderer.setStyle(
      this.tooltipElement,
      'left',
      `${left + width / 2}px`,
    );

    setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.addClass(this.tooltipElement, 'tooltip-show');
      }
    }, SHOW_TOOLTIP_TIMEOUT);
  }

  private removeTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeClass(this.tooltipElement, 'tooltip-show');
      setTimeout(() => {
        if (this.tooltipElement) {
          this.renderer.removeChild(document.body, this.tooltipElement);
          this.tooltipElement = null;
        }
      }, HIDE_TOOLTIP_TIMEOUT);
    }
  }
}
