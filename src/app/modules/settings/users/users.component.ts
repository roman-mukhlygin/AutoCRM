import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  role: string;
  status: string;
  test: string;
  lastAuthDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Александр Петров', status: 'Активен', lastAuthDate: "20.04.2023 12:13", role: 'Механик', test: ''},
  {position: 2, name: 'Иван Михайлов', status: 'Активен',lastAuthDate: "20.04.2023 18:44", role: 'Механик', test: ''},
  {position: 3, name: 'Константин Николаев', status: 'Активен', lastAuthDate: "20.04.2023 8:13", role: 'Механик' , test: ''},
  {position: 4, name: 'Владимир Чахирев', status: 'Активен', lastAuthDate: "19.04.2023 11:24", role: 'Администратор' , test: ''}
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'status', 'lastAuthDate', 'role', 'test'];
  dataSource = ELEMENT_DATA;
}
