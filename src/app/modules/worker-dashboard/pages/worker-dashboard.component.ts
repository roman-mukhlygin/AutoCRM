import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AutopartAddComponent} from "../dialogs/autopart-add/autopart-add.component";
import {ServiceAddComponent} from "../dialogs/service-add/service-add.component";

@Component({
  selector: 'worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.scss']
})
export class WorkerDashboardComponent {
  constructor(
    public dialog: MatDialog) {
  }

  public openAutopartAddDialog()
  {
    this.dialog.open(AutopartAddComponent);
  }

  public openServiceAddDialog()
  {
    this.dialog.open(ServiceAddComponent);
  }
}
