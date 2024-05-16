import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioArrendadorComponent } from './inicio-arrendador.component';

describe('InicioArrendadorComponent', () => {
  let component: InicioArrendadorComponent;
  let fixture: ComponentFixture<InicioArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
