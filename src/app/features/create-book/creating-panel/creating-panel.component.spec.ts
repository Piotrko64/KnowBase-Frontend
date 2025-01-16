import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingPanelComponent } from './creating-panel.component';

describe('CreatingPanelComponent', () => {
  let component: CreatingPanelComponent;
  let fixture: ComponentFixture<CreatingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
