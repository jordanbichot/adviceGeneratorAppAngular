import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdviceHandlerService } from './advice-displayer/data-access/advice-handler.service';
import { Slip } from './advice-displayer/models/slip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private adviceHandlerService: AdviceHandlerService) {}
  public getAdvice() {
    this.adviceHandlerService.getNewAdvice().subscribe((advice) => {
      this.adviceHandlerService.setAdvice(advice.slip.id, advice.slip.advice);
    });
  }
}
