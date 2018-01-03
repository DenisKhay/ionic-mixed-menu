import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, Tabs, Tab } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public pages: IPage[] = [
    {title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home'},
    {title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts'},
    {title: 'Settings', pageName: 'SettingsPage', icon: 'settings'},
  ];

  @ViewChild(Nav)
  public nav: Nav;
  public rootPage = 'TabsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

  }

  public openPage(page: IPage) {
    let params = {};
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();

    if (page.index) {
      params = {tabIndex: page.index};
    }

    if (childTabsNav && childTabsNav.length && page.index !== undefined) {
      childTabsNav[0].select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }

  }

  public isActive(page: IPage) {
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();

    const selectedTab: Tab = childTabsNav && childTabsNav.length && childTabsNav[0].getSelected();

    if(childTabsNav && childTabsNav.length){
      if (selectedTab && selectedTab.root && selectedTab.root === page.tabComponent) {
        return 'primary';
      }
      return;
    }


    const activeNav = this.nav.getActive();

    if (activeNav && activeNav.name && activeNav.name === page.pageName) {
      return 'primary';
    }

    return;
  }
}

export interface IPage {
  icon: string;
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
}
