import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


export type GEvents = 'logout' | 'login';

@Injectable()
export class AppEventsProvider {

  private listeners:Subject<any>[] = [];

  public emit(eventName: GEvents, data?: any) {
    if(this.listeners[eventName]){
      this.listeners[eventName].next(data || null);
    } else {
      console.warn('unable to find listeners for emitted event: ', eventName);
    }
  }

  public on(eventName: GEvents): Observable<any> {
    if(!this.listeners[eventName]){
      this.listeners[eventName] = new Subject();
    }
    return this.listeners[eventName].asObservable();
  }



}
