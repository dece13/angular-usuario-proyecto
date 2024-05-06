import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioArrendatarioComponent } from './inicio-arrendatario.component';

describe('InicioArrendatarioComponent', () => {
  let component: InicioArrendatarioComponent;
  let fixture: ComponentFixture<InicioArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
