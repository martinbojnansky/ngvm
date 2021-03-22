import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActionsViewComponent } from './crud-actions-view.component';

describe('CrudActionsViewComponent', () => {
  let component: CrudActionsViewComponent;
  let fixture: ComponentFixture<CrudActionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudActionsViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudActionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
