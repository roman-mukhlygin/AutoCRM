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
import { AutopartAddComponent } from './dialogs/autopart-add/autopart-add.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ServiceAddComponent } from './dialogs/service-add/service-add.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { ControlsComponent } from './components/controls/controls.component';



@NgModule({
  declarations: [
    WorkerDashboardComponent,
    DashboardCardComponent,
    CarInfoComponent,
    AutopartTableComponent,
    AbstractTableComponent,
    ServiceTableComponent,
    AutopartAddComponent,
    ServiceAddComponent,
    ControlsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class WorkerDashboardModule { }
