import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovegencyComponent } from './approvegency.component';

describe('ApprovegencyComponent', () => {
  let component: ApprovegencyComponent;
  let fixture: ComponentFixture<ApprovegencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovegencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovegencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
