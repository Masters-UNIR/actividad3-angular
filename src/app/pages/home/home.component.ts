import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarrousImagesComponent } from '../../components/carrous-images/carrous-images.component';
import { firstCourse, main } from '../../../assets/data/data'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrousImagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 
  firstCourse: any[] = [];
  main: any[] = [];

  constructor() {}



  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.firstCourse = firstCourse;
    this.main = main;
  }

}

