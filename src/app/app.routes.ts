import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout/layout.component';
import { AuthPanelComponent } from '@features/auth-panel/auth-panel.component';
import { CreateBookComponent } from '@features/create-book/create-book.component';
import { MainPanelComponent } from '@features/main-panel/main-panel.component';

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
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'main-panel', component: MainPanelComponent }, { path: 'create-book', component: CreateBookComponent }],
  }
];
