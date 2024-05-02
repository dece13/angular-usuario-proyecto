import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioArrendatarioComponent } from './usuario-arrendatario.component';

describe('UsuarioArrendatarioComponent', () => {
  let component: UsuarioArrendatarioComponent;
  let fixture: ComponentFixture<UsuarioArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
