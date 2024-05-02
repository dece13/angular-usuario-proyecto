import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpArrendadorComponent } from './sing-up-arrendador.component';

describe('SingUpArrendadorComponent', () => {
  let component: SingUpArrendadorComponent;
  let fixture: ComponentFixture<SingUpArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingUpArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingUpArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
