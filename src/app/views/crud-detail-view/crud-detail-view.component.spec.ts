import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDetailViewComponent } from './crud-detail-view.component';

describe('CrudDetailViewComponent', () => {
  let component: CrudDetailViewComponent;
  let fixture: ComponentFixture<CrudDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
