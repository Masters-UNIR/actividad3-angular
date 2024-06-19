import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesResComponent } from './instalaciones-res.component';

describe('InstalacionesResComponent', () => {
  let component: InstalacionesResComponent;
  let fixture: ComponentFixture<InstalacionesResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
