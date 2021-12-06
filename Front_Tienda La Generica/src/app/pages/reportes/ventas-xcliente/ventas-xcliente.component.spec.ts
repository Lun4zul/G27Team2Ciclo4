import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasXClienteComponent } from './ventas-xcliente.component';

describe('VentasXClienteComponent', () => {
  let component: VentasXClienteComponent;
  let fixture: ComponentFixture<VentasXClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasXClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasXClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
