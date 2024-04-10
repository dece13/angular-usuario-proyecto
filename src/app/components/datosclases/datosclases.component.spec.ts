import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosclasesComponent } from './datosclases.component';

describe('DatosclasesComponent', () => {
  let component: DatosclasesComponent;
  let fixture: ComponentFixture<DatosclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosclasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
