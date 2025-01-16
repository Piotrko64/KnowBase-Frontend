import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creating-panel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './creating-panel.component.html',
  styleUrl: './creating-panel.component.scss',
})
export class CreatingPanelComponent {

  faCoffee = faCoffee;

}
