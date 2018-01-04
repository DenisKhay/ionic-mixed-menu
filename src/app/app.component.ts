import { Component, OnInit, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppEventsProvider } from '../services/app-events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = 'LoginPage';

  @ViewChild(Nav)
  public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private appEvents: AppEventsProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public ngOnInit(){
    this.appEvents.on('logout').subscribe(()=>{
      this.nav.setRoot('LoginPage');
    });
  }

}

