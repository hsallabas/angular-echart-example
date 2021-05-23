import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public updateProgressBar$: BehaviorSubject<string>;
  private requestsRunning = 0;

  constructor() {
    this.updateProgressBar$ = new BehaviorSubject<string>('');
  }

  public increase(): void {
    this.requestsRunning++;
    if (this.requestsRunning === 1) {
      this.updateProgressBar$.next('indeterminate');
    }
  }

  public decrease(): void {
    if (this.requestsRunning > 0) {
      this.requestsRunning--;
      if (this.requestsRunning === 0) {
        this.updateProgressBar$.next('');
      }
    }
  }
}
