import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxjsComponent } from './counter-rxjs.component';

describe('CounterRxjsComponent', () => {
  let component: CounterRxjsComponent;
  let fixture: ComponentFixture<CounterRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
