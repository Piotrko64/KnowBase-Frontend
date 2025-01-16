import { Component } from '@angular/core';
import { CreatingPanelComponent } from './creating-panel/creating-panel.component';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [CreatingPanelComponent],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {

}
