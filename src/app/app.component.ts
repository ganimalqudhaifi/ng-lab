import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterSignalComponent } from './components/counter-signal/counter-signal.component';
import { CounterRxjsComponent } from './components/counter-rxjs/counter-rxjs.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CounterSignalComponent, CounterRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-lab';
}
