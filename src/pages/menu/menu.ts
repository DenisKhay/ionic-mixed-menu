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
    {
      title: 'Home',
      type: 'nav',
      icon: 'home',
      page: 'TabsPage',
      tabPage: 'Tab1Page',
      index: 0
    },
    {
      title: 'Tab 2',
      type: 'nav',
      icon: 'contacts',
      page: 'TabsPage',
      tabPage: 'Tab2Page',
      index: 1
    },
    {
      title: 'Admin Panel',
      type: 'nav',
      icon: 'contacts',
      page: 'AdminTabsPage',
      index: 0
    },
    {
      title: 'Settings',
      type: 'nav',
      icon: 'settings',
      page: 'SettingsPage'
    },

    {
      title: 'Logout',
      type: 'action',
      icon: 'log-out',
      action() {
      }
    }
  ];

  @ViewChild(Nav)
  public nav: Nav;
  public rootPage = 'TabsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, principal: PrincipalProvider) {
    this.menuItems.find((by) => by.title === 'Logout').action = principal.logout.bind(principal);
  }

  public openPage(pageName: string, tabIndex?: number) {
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();
    if (childTabsNav.length && childTabsNav[0].viewCtrl.id === pageName && (typeof tabIndex !== 'undefined')) {
      childTabsNav[0].select(tabIndex);
    } else {
      this.nav.setRoot(pageName, {tabIndex});
    }

  }

  public isActive(page, tabPage) {
    const childTabsNav: Tabs[] = this.nav.getActiveChildNavs();

    const selectedTab: Tab = childTabsNav.length && childTabsNav[0].getSelected && childTabsNav[0].getSelected();

    if (childTabsNav.length && typeof tabPage !== 'undefined') {
      if (selectedTab && selectedTab.root && selectedTab.root === tabPage) {
        return 'primary';
      }
      return;
    }


    const activeNav = this.nav.getActive();

    if (activeNav && activeNav.name && activeNav.name === page) {
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
  page?: string;
  tabPage?: any;
  index?: number;
}
