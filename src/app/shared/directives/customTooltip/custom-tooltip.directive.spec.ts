import { ElementRef, Renderer2 } from '@angular/core';
import { CustomTooltipDirective } from './custom-tooltip.directive';

describe('CustomTooltipDirective', () => {
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('div'));
    rendererMock = jasmine.createSpyObj('Renderer2', [
      'createElement',
      'appendChild',
      'setStyle',
      'removeChild',
    ]);
  });

  it('should create an instance', () => {
    const directive = new CustomTooltipDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
