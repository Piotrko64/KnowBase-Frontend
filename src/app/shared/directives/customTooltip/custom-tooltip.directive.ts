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
  private isTooltipVisible: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('click') onClick() {
    this.removeTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  private showTooltip() {
    if (this.isTooltipVisible) return;
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.setProperty(
      this.tooltipElement,
      'innerHTML',
      this.tooltipText,
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

    this.isTooltipVisible = true;

    setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.addClass(this.tooltipElement, 'tooltip-show');
      }
    }, SHOW_TOOLTIP_TIMEOUT);
  }

  private removeTooltip() {
    if (!this.isTooltipVisible) return;

    if (this.tooltipElement) {
      this.renderer.removeClass(this.tooltipElement, 'tooltip-show');

      setTimeout(() => {
        if (this.tooltipElement) {
          this.renderer.removeChild(document.body, this.tooltipElement);
          this.tooltipElement = null;
          this.isTooltipVisible = false;
        }
      }, HIDE_TOOLTIP_TIMEOUT);
    }
  }
}
