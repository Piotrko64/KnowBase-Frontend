import { Routes } from '@angular/router';
import { LoginPanelComponent } from './core/pages/auth/components/login-panel/login-panel.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPanelComponent,
  },
];
