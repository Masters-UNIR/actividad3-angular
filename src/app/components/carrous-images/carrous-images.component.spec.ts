import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousImagesComponent } from './carrous-images.component';

describe('CarrousImagesComponent', () => {
  let component: CarrousImagesComponent;
  let fixture: ComponentFixture<CarrousImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrousImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrousImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
