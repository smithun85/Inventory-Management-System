import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, publish, refCount } from 'rxjs';
import { Router } from '@angular/router';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notification: BehaviorSubject<string> = new BehaviorSubject('');
  readonly notification$: Observable<string> = this._notification.asObservable().pipe(publish(),refCount());

  constructor() { }

  notify(type:string,icon:string,message:string,is_payment_timeout?:boolean) {

     this._notification.next(message);
    var type1 = ['','info','success','warning','danger'];

       var color = Math.floor((Math.random() * 4) + 1);
  }
}
