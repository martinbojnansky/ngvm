import { ViewModel, Property } from 'src/app/ngvm';
import { CrudService } from 'src/app/services/crud.service';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class CrudDetailViewModel<TDetail = any> extends ViewModel {
  @Property()
  detail: TDetail;

  abstract get isEditable(): boolean;
  abstract editable: boolean;

  protected abstract readonly crudService: CrudService<
    number,
    unknown,
    TDetail
  >;

  constructor() {
    super();
  }

  onInit(): void {
    this.load(1);
  }

  load(id: number): void {
    this.detail = null;
    this.crudService.readDetail(id).subscribe((detail) => {
      this.detail = detail;
    });
  }
}
