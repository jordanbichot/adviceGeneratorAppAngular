import { Component } from '@angular/core';
import { AdviceHandlerService } from './data-access/advice-handler.service';

@Component({
  selector: 'app-advice-displayer',
  templateUrl: './advice-displayer.component.html',
  styleUrls: ['./advice-displayer.component.scss'],
})
export class AdviceDisplayerComponent {
  public currentAdviceId$ = this.adviceHandlerService.adviceId$;
  public currentAdviceText$ = this.adviceHandlerService.adviceText$;

  constructor(private adviceHandlerService: AdviceHandlerService) {}
}
