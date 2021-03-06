import { Injectable } from '@angular/core';
import { SampleSummary, SampleDetail } from '../models/sample';
import { CrudService } from './crud.service';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SampleService extends CrudService<
  number,
  SampleSummary,
  SampleDetail
> {
  readDetail(id: number) {
    return of(1).pipe(
      delay(2000),
      map(
        () =>
          ({
            id: id,
            name: `Name ${id}`,
            description: `Description ${id}`,
            type:
              id % 3 === 0 ? 'Expert' : id % 3 === 2 ? 'Advanced' : 'Beginner',
          } as SampleDetail)
      )
    );
  }
}
