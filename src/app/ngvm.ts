import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ViewModel {
  get propertyChanged$() {
    return this._propertyChanged$.asObservable();
  }

  constructor() {}

  ngOnDestroy(): void {
    this.onDestroy();
  }

  onDestroy(): void {}

  protected readonly _properties$: BehaviorSubject<any> = new BehaviorSubject(
    {} // TODO: Load up with initial values
  );
  protected readonly _propertyChanged$: BehaviorSubject<string> = new BehaviorSubject(
    '$' // TODO: Do not emmit such a value
  );
}

export function Property<T>() {
  return function (target: T, prop: string | symbol) {
    const key = prop as keyof T;

    const getter = function (this: ViewModel) {
      return this._properties$.value[key as keyof T];
    };

    const setter = function (this: ViewModel, value: any) {
      this._properties$.next({ ...this._properties$.value, [key]: value });
      this._propertyChanged$.next(key.toString());
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function Parent<T>() {
  return function (target: T, prop: string | symbol) {
    const key = prop as keyof T;

    const getter = function (this: ViewModel) {
      return target[key as keyof T];
    };

    const setter = function (this: ViewModel, value: any) {
      const parentViewModel = value as ViewModel;
      parentViewModel._propertyChanged$.subscribe((pc) => {
        console.log(`${key.toString()}.${pc}`);
        this._propertyChanged$.next(`${key.toString()}.${pc}`);
      }); // TODO: Subscribe only until destroyed
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
