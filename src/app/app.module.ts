import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { BarComponent } from './components/bar/bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { WorkComponent } from './components/work/work.component';
import { ChefComponent } from './components/chef/chef.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoComponent,
    HomeComponent,
    BarComponent,
    CardsComponent,
    AboutComponent,
    InfoComponent,
    WorkComponent,
    ChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
