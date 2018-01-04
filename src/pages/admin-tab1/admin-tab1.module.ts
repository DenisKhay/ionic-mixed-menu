import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTab1Page } from './admin-tab1';

@NgModule({
  declarations: [
    AdminTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(AdminTab1Page),
  ],
})
export class AdminTab1PageModule {}
