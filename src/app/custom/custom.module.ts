import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/header/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    DashboardComponent,
  ]
})
export class CustomModule { }
