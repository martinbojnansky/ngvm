import { ViewModel, Property } from 'src/app/ngvm';
import { CrudService } from 'src/app/services/crud.service';

export abstract class CrudDetailViewModel<TDetail = any> extends ViewModel {
  @Property()
  detail: TDetail;

  protected abstract readonly crudService: CrudService<
    number,
    unknown,
    TDetail
  >;

  constructor() {
    super();
  }

  onInit() {
    this.load(1);
  }

  load(id: number): void {
    this.detail = null;
    this.crudService.readDetail(id).subscribe((detail) => {
      this.detail = detail;
    });
  }
}
