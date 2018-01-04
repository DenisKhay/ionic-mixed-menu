import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTabsPage } from './admin-tabs';

@NgModule({
  declarations: [
    AdminTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTabsPage),
  ],
})
export class AdminTabsPageModule {}
