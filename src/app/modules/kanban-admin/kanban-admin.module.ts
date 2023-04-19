import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanAdminComponent } from './kanban-admin.component';
import {KanbanModule} from "@syncfusion/ej2-angular-kanban";



@NgModule({
  declarations: [
    KanbanAdminComponent
  ],
    imports: [
        CommonModule,
        KanbanModule
    ]
})
export class KanbanAdminModule { }
