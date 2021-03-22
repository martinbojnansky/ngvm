import { Injectable } from '@angular/core';
import { CrudDetailViewModel } from './crud-detail-view-model';
import { SampleDetail } from '../models/sample';
import { SampleService } from '../services/sample.service';

@Injectable()
export class SampleDetailViewModel extends CrudDetailViewModel<SampleDetail> {
  constructor(protected crudService: SampleService) {
    super();
  }
}
