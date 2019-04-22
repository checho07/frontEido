import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana2Component } from './semana2.component';

describe('Semana2Component', () => {
  let component: Semana2Component;
  let fixture: ComponentFixture<Semana2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semana2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Semana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
