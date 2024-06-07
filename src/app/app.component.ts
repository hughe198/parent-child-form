import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormParentComponent } from './form-parent/form-parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormParentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parent-child-form';
}
