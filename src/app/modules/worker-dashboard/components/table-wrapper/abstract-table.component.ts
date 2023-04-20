import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.scss']
})
export class AbstractTableComponent {
  @Input() title: string = '';
  @Output() openDialog: EventEmitter<any> = new EventEmitter();
}
