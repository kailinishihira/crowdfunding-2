import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfundraiserComponent } from './newfundraiser.component';

describe('NewfundraiserComponent', () => {
  let component: NewfundraiserComponent;
  let fixture: ComponentFixture<NewfundraiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfundraiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
