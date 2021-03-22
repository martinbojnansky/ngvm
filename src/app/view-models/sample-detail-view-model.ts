import { Injectable } from '@angular/core';
import { CrudDetailViewModel } from './crud-detail-view-model';
import { SampleDetail } from '../models/sample';
import { SampleService } from '../services/sample.service';
import { SamplesViewModel } from './samples-view-model';
import { Parent } from '../ngvm';

@Injectable()
export class SampleDetailViewModel extends CrudDetailViewModel<SampleDetail> {
  get editable() {
    return this.samplesViewModel.editable;
  }

  @Parent()
  protected _samplesViewModel: SamplesViewModel;

  constructor(
    protected crudService: SampleService,
    protected samplesViewModel: SamplesViewModel
  ) {
    super();
    this._samplesViewModel = samplesViewModel;
  }
}
