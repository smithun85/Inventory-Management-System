import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoaderState } from './loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // private loading: boolean = false;
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
}

hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
}
}
