import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainLayoutModule} from "./modules/main-layout/main-layout.module";
import {WorkerDashboardModule} from "./modules/worker-dashboard/worker-dashboard.module";
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import {KanbanAdminModule} from "./modules/kanban-admin/kanban-admin.module";
import {SettingsModule} from "./modules/settings/settings.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    WorkerDashboardModule,
    KanbanModule,
    KanbanAdminModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
