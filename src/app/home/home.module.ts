import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { InstrumentListComponent } from '../components/instrument-list/instrument-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, NavbarComponent, InstrumentListComponent]
})
export class HomePageModule { }
