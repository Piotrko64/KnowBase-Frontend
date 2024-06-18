import { Component } from '@angular/core';
import { BasicInputComponent } from '../../../../../shared/components/basic-input/basic-input.component';

@Component({
  selector: 'auth-login-panel',
  standalone: true,
  imports: [BasicInputComponent],
  templateUrl: './login-panel.component.html',
})
export class LoginPanelComponent {}
