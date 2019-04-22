import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana4Component } from './semana4.component';

describe('Semana4Component', () => {
  let component: Semana4Component;
  let fixture: ComponentFixture<Semana4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semana4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semana4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
