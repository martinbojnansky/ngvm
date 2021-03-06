import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SamplesViewModel } from 'src/app/view-models/samples-view-model';

@Component({
  selector: 'app-samples-view',
  templateUrl: './samples-view.component.html',
  styleUrls: ['./samples-view.component.scss'],
  providers: [SamplesViewModel],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamplesViewComponent implements OnInit {
  constructor(public vm: SamplesViewModel) {}

  ngOnInit(): void {}
}
