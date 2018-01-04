import { Injectable } from '@angular/core';
import { AppEventsProvider } from '../../services/app-events';

/*
  Generated class for the PrincipalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrincipalProvider {

  constructor(private appEvents: AppEventsProvider) {

  }

  public logout(){
    this.appEvents.emit('logout');
  }

}
