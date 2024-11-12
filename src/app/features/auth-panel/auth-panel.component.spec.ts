import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPanelComponent } from './auth-panel.component';

describe('LoginPanelComponent', () => {
  let component: AuthPanelComponent;
  let fixture: ComponentFixture<AuthPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
