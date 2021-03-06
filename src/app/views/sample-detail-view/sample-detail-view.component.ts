import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CrudDetailViewModel } from 'src/app/view-models/crud-detail-view-model';
import { SampleDetailViewModel } from 'src/app/view-models/sample-detail-view-model';

@Component({
  selector: 'app-sample-detail-view',
  templateUrl: './sample-detail-view.component.html',
  styleUrls: ['./sample-detail-view.component.scss'],
  providers: [
    SampleDetailViewModel,
    { provide: CrudDetailViewModel, useExisting: SampleDetailViewModel },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleDetailViewComponent implements OnInit {
  constructor(public vm: SampleDetailViewModel) {}

  ngOnInit(): void {}
}
