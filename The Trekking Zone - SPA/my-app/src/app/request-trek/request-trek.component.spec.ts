import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTrekComponent } from './request-trek.component';

describe('RequestTrekComponent', () => {
  let component: RequestTrekComponent;
  let fixture: ComponentFixture<RequestTrekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTrekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
