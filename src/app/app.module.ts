import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navigation-bar/nav-bar/nav-bar.component';
import { MonthViewComponent } from './components/month-view/month-view/month-view.component';
import { DayViewComponent } from './components/day-view/day-view/day-view.component';
import { YearViewComponent } from './components/year-view/year-view/year-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MonthViewComponent,
    DayViewComponent,
    YearViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
