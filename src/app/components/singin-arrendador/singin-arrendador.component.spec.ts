import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginArrendadorComponent } from './singin-arrendador.component';

describe('SinginArrendadorComponent', () => {
  let component: SinginArrendadorComponent;
  let fixture: ComponentFixture<SinginArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinginArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinginArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
