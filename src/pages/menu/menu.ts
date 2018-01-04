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
      selectedTabIndex: 0
    },
    {
      title: 'Tab 2',
      type: 'nav',
      icon: 'contacts',
      page: 'TabsPage',
      tabPage: 'Tab2Page',
      selectedTabIndex: 1
    },
    {
      title: 'Admin Panel',
      type: 'nav',
      icon: 'contacts',
      page: 'AdminTabsPage',
      selectedTabIndex: 2
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

  public onClick(menuItem: IMenuItem) {

    if (menuItem.type === 'action') {
      return menuItem.action();
    }

    const childNavs: any[] = this.nav.getActiveChildNavs();
    const childTabNav: Tabs = childNavs.find(({viewCtrl}) => (viewCtrl && viewCtrl.id === menuItem.page));

    if (childTabNav && (typeof menuItem.selectedTabIndex !== 'undefined')) {
      childTabNav.select(menuItem.selectedTabIndex);
    } else {
      this.nav.setRoot(menuItem.page, {tabIndex: menuItem.selectedTabIndex});
    }

  }

  public isActive(page, tabPage) {
    const childTabsNav: any[] = this.nav.getActiveChildNavs();

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
  selectedTabIndex?: number;
}
