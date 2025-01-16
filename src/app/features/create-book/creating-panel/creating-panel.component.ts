import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octListUnordered } from '@ng-icons/octicons';

@Component({
  selector: 'app-creating-panel',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './creating-panel.component.html',
  styleUrl: './creating-panel.component.scss',
  viewProviders: [provideIcons({ octListUnordered })],
})
export class CreatingPanelComponent {

}
