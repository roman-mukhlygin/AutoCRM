import { Component } from '@angular/core';

export interface Autopart {
  article: string;
  position: number;
  name: string;
  price: string;
}

const DATA: Autopart[] = [
  {position: 1, article: '7239', name: "Задняя стойка", price: '2300'},
  {position: 2, article: '4590', name: "Пыльник", price: '50'},
  {position: 3, article: '8927', name: "Подшипник стойки", price: '350'},
  {position: 4, article: '6048', name: "Резиновая втулка", price: '20'}
];

@Component({
  selector: 'app-autopart-table',
  templateUrl: './autopart-table.component.html',
  styleUrls: ['./autopart-table.component.scss']
})
export class AutopartTableComponent {
  displayedColumns: string[] = ['position', 'article', 'name', 'price'];
  dataSource = DATA;
}
