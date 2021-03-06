import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navigation-bar/nav-bar/nav-bar.component';
import { MonthViewComponent } from './components/month-view/month-view/month-view.component';
import { DayViewComponent } from './components/day-view/day-view/day-view.component';
import { YearViewComponent } from './components/year-view/year-view/year-view.component';
import { HomeComponent } from './components/home/home/home.component';
import { AssignmentItemComponent } from './components/assignment-item/assignment-item/assignment-item.component';
import { ClassViewComponent } from './components/class-view/class-view/class-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MonthViewComponent,
    DayViewComponent,
    YearViewComponent,
    HomeComponent,
    AssignmentItemComponent,
    ClassViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'year-view', component: YearViewComponent },
      { path: 'month-view', component: MonthViewComponent },
      { path: 'day-view', component: DayViewComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
