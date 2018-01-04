import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, Tabs, Tab } from 'ionic-angular';
import { PrincipalProvider } from '../../providers/principal/principal';

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

  public menuItems: IMenuItem[] = [
    {title: 'Home', type: 'nav', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home'},
    {title: 'Tab 2', type: 'nav', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts'},
    {title: 'Settings', type: 'nav', pageName: 'SettingsPage', icon: 'settings'},
    {title: 'Logout', type: 'action', icon: 'log-out', action(){}}
  ];

  @ViewChild(Nav)
  public nav: Nav;
  public rootPage = 'TabsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private principal: PrincipalProvider) {
    this.menuItems[3].action = principal.logout.bind(principal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  public openPage(tabIndex: number, pageName: string) {
    let params = {};
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();

    if (tabIndex) {
      params = {tabIndex};
    }

    if (childTabsNav && childTabsNav.length && tabIndex !== undefined) {
      childTabsNav[0].select(tabIndex);
    } else {
      this.nav.setRoot(pageName, params);
    }

  }

  public isActive(pageName, pageComponent) {
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();

    const selectedTab: Tab = childTabsNav && childTabsNav.length && childTabsNav[0].getSelected && childTabsNav[0].getSelected();

    if (childTabsNav && childTabsNav.length) {
      if (selectedTab && selectedTab.root && selectedTab.root === pageComponent) {
        return 'primary';
      }
      return;
    }


    const activeNav = this.nav.getActive();

    if (activeNav && activeNav.name && activeNav.name === pageName) {
      return 'primary';
    }

    return;
  }
}

export interface IMenuItem {
  icon: string;
  title: string;
  type: 'nav' | 'action';
  action?: () => void;
  pageName?: string;
  tabComponent?: any;
  index?: number;
}
