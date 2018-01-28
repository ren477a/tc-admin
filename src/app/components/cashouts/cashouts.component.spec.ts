import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutsComponent } from './cashouts.component';

describe('CashoutsComponent', () => {
  let component: CashoutsComponent;
  let fixture: ComponentFixture<CashoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
