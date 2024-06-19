import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoNaturalComponent } from './entorno-natural.component';

describe('EntornoNaturalComponent', () => {
  let component: EntornoNaturalComponent;
  let fixture: ComponentFixture<EntornoNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntornoNaturalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntornoNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
