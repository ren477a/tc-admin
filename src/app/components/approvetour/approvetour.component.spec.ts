import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovetourComponent } from './approvetour.component';

describe('ApprovetourComponent', () => {
  let component: ApprovetourComponent;
  let fixture: ComponentFixture<ApprovetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
