import { Component, Input } from '@angular/core';
import { CardInfo } from '../../Models/cardInfo';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input()
  public card!: CardInfo[];
}
