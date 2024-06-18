import { Component } from '@angular/core';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginPanelComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {}
