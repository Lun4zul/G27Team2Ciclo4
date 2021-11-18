import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConsultarComponent } from './clientes-consultar.component';

describe('ClientesConsultarComponent', () => {
  let component: ClientesConsultarComponent;
  let fixture: ComponentFixture<ClientesConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
