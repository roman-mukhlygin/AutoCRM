import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerDashboardComponent } from './pages/worker-dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { AutopartTableComponent } from './components/autopart-table/autopart-table.component';
import {MatTableModule} from "@angular/material/table";
import { AbstractTableComponent } from './components/table-wrapper/abstract-table.component';
import { ServiceTableComponent } from './components/service-table/service-table.component';



@NgModule({
  declarations: [
    WorkerDashboardComponent,
    DashboardCardComponent,
    CarInfoComponent,
    AutopartTableComponent,
    AbstractTableComponent,
    ServiceTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule
  ]
})
export class WorkerDashboardModule { }
