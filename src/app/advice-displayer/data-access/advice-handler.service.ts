import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdviceHandlerService {
  private adviceTitle = new BehaviorSubject<string>('Advice #117');
  public adviceTitle$ = this.adviceTitle.asObservable();
  private adviceText = new BehaviorSubject<string>('"↓"');
  public adviceText$ = this.adviceText.asObservable();

  constructor() {}

  public setNewAdvice(title: string, advice: string) {
    this.adviceTitle.next(title);
    this.adviceText.next(advice);
  }
}
