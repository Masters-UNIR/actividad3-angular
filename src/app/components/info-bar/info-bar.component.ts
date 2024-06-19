import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-info-bar',
  standalone: true,
   imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.css'
})
export class InfoBarComponent {

}
