import { Routes } from '@angular/router';
import { AuthPanelComponent } from './features/auth-panel/auth-panel.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthPanelComponent,
  },
];
