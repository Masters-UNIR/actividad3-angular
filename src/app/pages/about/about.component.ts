import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InstalacionesResComponent } from '../../components/instalaciones-res/instalaciones-res.component';
import { NuestraHistoriaComponent } from '../../components/nuestra-historia/nuestra-historia.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, InstalacionesResComponent,NuestraHistoriaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
