import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana3Component } from './semana3.component';

describe('Semana3Component', () => {
  let component: Semana3Component;
  let fixture: ComponentFixture<Semana3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semana3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semana3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
