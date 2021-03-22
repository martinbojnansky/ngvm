import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CrudDetailViewModel } from 'src/app/view-models/crud-detail-view-model';

@Component({
  selector: 'app-crud-actions-view',
  templateUrl: './crud-actions-view.component.html',
  styleUrls: ['./crud-actions-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudActionsViewComponent implements OnInit {
  constructor(public vm: CrudDetailViewModel) {}

  ngOnInit(): void {}
}
