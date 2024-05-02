import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpArrendatarioComponent } from './sing-up-arrendatario.component';

describe('SingUpArrendatarioComponent', () => {
  let component: SingUpArrendatarioComponent;
  let fixture: ComponentFixture<SingUpArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingUpArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingUpArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
