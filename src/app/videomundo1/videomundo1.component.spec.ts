import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videomundo1Component } from './videomundo1.component';

describe('Videomundo1Component', () => {
  let component: Videomundo1Component;
  let fixture: ComponentFixture<Videomundo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videomundo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videomundo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
