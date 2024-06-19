import { Component } from '@angular/core';
import { EntornoNaturalComponent } from '../../components/entorno-natural/entorno-natural.component';
import { CulturaOcioComponent } from '../../components/cultura-ocio/cultura-ocio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enviroment',
  standalone: true,
  imports: [EntornoNaturalComponent,CulturaOcioComponent, CommonModule],
  templateUrl: './enviroment.component.html',
  styleUrl: './enviroment.component.css'
})
export class EnviromentComponent {

}
