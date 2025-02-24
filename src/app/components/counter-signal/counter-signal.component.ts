import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  imports: [],
  templateUrl: './counter-signal.component.html'
})
export class CounterSignalComponent {
  count = signal(0)

  isEven = computed(() => this.count() % 2 === 0);

  increment() {
    this.count.set(this.count() + 1)
  }

  decrement() {
    this.count.set(this.count() - 1)
  }

  reset() {
    this.count.set(0)
  }
}
