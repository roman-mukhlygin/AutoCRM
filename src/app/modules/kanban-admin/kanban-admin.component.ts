import { Component} from '@angular/core';
import {CardSettingsModel, SwimlaneSettingsModel} from "@syncfusion/ej2-angular-kanban";

@Component({
  selector: 'app-kanban-admin',
  templateUrl: './kanban-admin.component.html',
  styleUrls: ['./kanban-admin.component.scss']
})
export class KanbanAdminComponent {
  public data: Object[] =  [
    { Id: 'Лада 2110', Status: 'Open', Summary: 'Стук заднего л. колеса', Type: 'Story', Priority: 'Low', Tags: 'Подвеска', Estimate: 3.5, Assignee: 'Константин Николаев', RankId: 1 },
    { Id: 'Лада 2114', Status: 'InProgress', Summary: 'Утечка охлаждающей жидкости около печки', Type: 'Bug', Priority: 'Release Breaker', Tags: 'Система охлаждения', Estimate: 2.5, Assignee: 'Александр Петров', RankId: 2  },
    { Id: 'Nissan Almera Classic', Status: 'InProgress', Summary: 'Не работает регулятор печки', Type: 'Story', Priority: 'Low', Tags: 'Электроника', Estimate: 3.5, Assignee: 'Константин Николаев', RankId: 1 },
    { Id: 'Mitsubishi Eclipse', Status: 'Open', Summary: 'Замена заднего ступичного подшипника', Type: 'Story', Priority: 'Low', Tags: 'Подвеска', Estimate: 3.5, Assignee: 'Александр Петров', RankId: 1 },
    { Id: 'Audi Q5 ', Status: 'InProgress', Summary: 'Регулриовка клапанов', Type: 'Story', Priority: 'Low', Tags: 'Двигатель', Estimate: 3.5, Assignee: 'Константин Николаев', RankId: 1 },
    { Id: 'Toyota Camry', Status: 'InProgress', Summary: 'Замена масла в АКПП', Type: 'Bug', Priority: 'Release Breaker', Tags: 'Трансмиссия', Estimate: 2.5, Assignee: 'Александр Петров', RankId: 2  },
    { Id: 'Ford Focus Classic', Status: 'Open', Summary: 'Неисправность системы зажигания', Type: 'Story', Priority: 'Low', Tags: 'Электроника', Estimate: 3.5, Assignee: 'Иван Михайлов', RankId: 1 },
    { Id: 'Honda Civic', Status: 'InProgress', Summary: 'Замена свечей зажигания', Type: 'Story', Priority: 'Low', Tags: 'Двигатель', Estimate: 3.5, Assignee: 'Иван Михайлов', RankId: 1 }
  ];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
    tagsField: 'Tags',
  };

  public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
}
