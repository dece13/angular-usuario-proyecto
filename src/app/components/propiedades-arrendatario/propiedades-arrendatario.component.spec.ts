import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesArrendatarioComponent } from './propiedades-arrendatario.component';

describe('PropiedadesArrendatarioComponent', () => {
  let component: PropiedadesArrendatarioComponent;
  let fixture: ComponentFixture<PropiedadesArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadesArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadesArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
