import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-samples-view',
  templateUrl: './samples-view.component.html',
  styleUrls: ['./samples-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamplesViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
