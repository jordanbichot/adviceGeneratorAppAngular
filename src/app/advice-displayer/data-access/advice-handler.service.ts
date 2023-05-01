import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Slip } from '../models/slip';

@Injectable({
  providedIn: 'root',
})
export class AdviceHandlerService {
  private adviceId = new BehaviorSubject<number>(0);
  public adviceId$ = this.adviceId.asObservable();
  private adviceText = new BehaviorSubject<string>(
    'Click the button below to get a random advice'
  );
  public adviceText$ = this.adviceText.asObservable();
  private apiUrl = 'https://api.adviceslip.com/advice?t=';

  constructor(private http: HttpClient) {}

  public getNewAdvice(): Observable<Slip> {
    return this.http.get<Slip>(this.apiUrl + Math.random());
  }

  public setAdvice(id: number, advice: string) {
    this.adviceId.next(id);
    this.adviceText.next(advice);
  }
}
