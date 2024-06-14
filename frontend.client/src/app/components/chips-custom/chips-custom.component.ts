import { Component, Input } from '@angular/core';
import { StatusEnum } from '../../Enums/StatusEnums';

@Component({
  selector: 'app-chips-custom',
  templateUrl: './chips-custom.component.html',
  styleUrl: './chips-custom.component.css'
})
export class ChipsCustomComponent {

  @Input()
  public status!: StatusEnum;


  getStatusClass() {
    return {
      'status-disponivel': this.status === StatusEnum.DISPONIVEL,
      'status-indisponivel': this.status === StatusEnum.INDISPONIVEL
    };
  }
}
