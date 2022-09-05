import { action, makeObservable, observable } from "mobx";

export interface IUserViewModel<T> {
  submitHandler?: T;
  setSubmitHandler(fn: T): void;
}

export class UserViewModel implements IUserViewModel<any> {
  constructor() {
    this.setSubmitHandler = this.setSubmitHandler.bind(this);
    makeObservable(this, {
      submitHandler: observable,
      setSubmitHandler: action,
    });
  }
  submitHandler?: any;
  setSubmitHandler(fn: any) {
    this.submitHandler = fn;
  }
}
