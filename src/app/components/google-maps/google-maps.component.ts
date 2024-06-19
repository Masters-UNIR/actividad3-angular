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
    mapId: "DEMO_MAP_ID",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };




}

