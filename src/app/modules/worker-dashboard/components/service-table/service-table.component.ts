import { Component } from '@angular/core';

export interface Service {
  position: number;
  name: string;
  price: string;
}

const DATA: Service[] = [
  {position: 1, name: "Диагностика подвески", price: '500'},
  {position: 2, name: "Замена задней стойки", price: '1500'},
  {position: 3,  name: "Проверка электрики", price: '350'},
  {position: 4, name: "Замена сайлентблоков задней балки", price: '1500'}
];

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.scss']
})
export class ServiceTableComponent {
  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = DATA;
}
