import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { CommonModule } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule  , CommonModule, FontAwesomeModule, InfoBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad3-angular';
  faCoffee = faCoffee;
}
