import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationSummaryComponent } from './destination-summary.component';

describe('DestinationSummaryComponent', () => {
  let component: DestinationSummaryComponent;
  let fixture: ComponentFixture<DestinationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
