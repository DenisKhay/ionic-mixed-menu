import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

/**
 * Generated class for the AdminTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-tabs',
  templateUrl: 'admin-tabs.html',
})
export class AdminTabsPage {

  @ViewChild('adminTabs')
  public tabRef: Tabs;
  public tab1Root: any = 'AdminTab1Page';
  public tab2Root: any = 'AdminTab2Page';
  public tab3Root: any = 'AdminTab3Page';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidEnter() {
    this.tabRef.select(this.navParams.data.tabIndex || 0);
  }

}
