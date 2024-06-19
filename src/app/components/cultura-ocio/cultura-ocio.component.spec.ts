import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaOcioComponent } from './cultura-ocio.component';

describe('CulturaOcioComponent', () => {
  let component: CulturaOcioComponent;
  let fixture: ComponentFixture<CulturaOcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturaOcioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturaOcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
