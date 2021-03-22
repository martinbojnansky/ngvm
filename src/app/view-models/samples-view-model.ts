import { Injectable } from '@angular/core';
import { ViewModel, Property } from '../ngvm';

@Injectable()
export class SamplesViewModel extends ViewModel {
  @Property()
  editable: boolean = false;
}
