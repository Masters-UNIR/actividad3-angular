import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { RouterOutlet } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GoogleMapsModule, ],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.css'
})


export class GoogleMapsComponent {



   options: google.maps.MapOptions = {
    mapId: "mery-lourestaurant",
    center: { lat: 42.1148, lng: 3.144766 },
    zoom: 16,
  };

}

