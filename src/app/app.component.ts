import { Component, OnDestroy } from '@angular/core';
import { AdviceHandlerService } from './advice-displayer/data-access/advice-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private adviceSubscription: Subscription = new Subscription();
  constructor(private adviceHandlerService: AdviceHandlerService) {}
  public getAdvice() {
    this.adviceSubscription = this.adviceHandlerService
      .getNewAdvice()
      .subscribe((advice) => {
        this.adviceHandlerService.setAdvice(advice.slip.id, advice.slip.advice);
      });
  }

  ngOnDestroy(): void {
    this.adviceSubscription.unsubscribe();
  }
}
