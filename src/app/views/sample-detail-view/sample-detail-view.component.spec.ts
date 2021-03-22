import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDetailViewComponent } from './sample-detail-view.component';

describe('SampleDetailViewComponent', () => {
  let component: SampleDetailViewComponent;
  let fixture: ComponentFixture<SampleDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
