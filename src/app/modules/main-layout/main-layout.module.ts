import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    MatListModule,
    RouterLink
  ]
})
export class MainLayoutModule { }
