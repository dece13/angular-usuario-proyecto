import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioArrendadorComponent } from './usuario-arrendador.component';

describe('UsuarioArrendadorComponent', () => {
  let component: UsuarioArrendadorComponent;
  let fixture: ComponentFixture<UsuarioArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
