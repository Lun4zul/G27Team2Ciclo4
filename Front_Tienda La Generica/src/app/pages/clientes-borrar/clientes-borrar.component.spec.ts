import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBorrarComponent } from './clientes-borrar.component';

describe('ClientesBorrarComponent', () => {
  let component: ClientesBorrarComponent;
  let fixture: ComponentFixture<ClientesBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
