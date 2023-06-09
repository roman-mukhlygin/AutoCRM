import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./modules/main-layout/main-layout/main-layout.component";
import {WorkerDashboardComponent} from "./modules/worker-dashboard/pages/worker-dashboard.component";
import {KanbanAdminComponent} from "./modules/kanban-admin/kanban-admin.component";
import {SettingsComponent} from "./modules/settings/settings.component";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: WorkerDashboardComponent
      },
      {
        path: 'kanban',
        component: KanbanAdminComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
