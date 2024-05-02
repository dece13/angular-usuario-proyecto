import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInArrendatarioComponent } from './sing-in-arrendatario.component';

describe('SingInArrendatarioComponent', () => {
  let component: SingInArrendatarioComponent;
  let fixture: ComponentFixture<SingInArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingInArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingInArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
