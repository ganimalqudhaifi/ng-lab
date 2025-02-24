import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs',
  imports: [],
  templateUrl: './counter-rxjs.component.html'
})
export class CounterRxjsComponent {
  private countSubject = new BehaviorSubject<number>(0)
  count$ = this.countSubject.asObservable();

  isEven$ = this.count$.pipe(map(count => count % 2 === 0));

  increment() {
    this.countSubject.next(this.countSubject.value + 1)
  }

  decrement() {
    this.countSubject.next(this.countSubject.value - 1)
  }

  reset() {
    this.countSubject.next(0)
  }
}
