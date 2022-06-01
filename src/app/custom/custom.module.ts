import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './component/header/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {TaskComponent} from './component/task/task.component';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    DashboardComponent,
    TaskComponent
  ]
})
export class CustomModule {
}
