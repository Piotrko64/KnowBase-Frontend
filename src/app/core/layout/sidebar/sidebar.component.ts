import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octListUnordered } from '@ng-icons/octicons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  viewProviders: [provideIcons({ octListUnordered })],
})
export class SidebarComponent {}
