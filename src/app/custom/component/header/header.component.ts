import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public counter$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  private _timer$!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this._timer$ = timer(0, 2000)
      .subscribe(r => this.counter$.next(this._incrementCounter(this.counter$.value)));
  }

  ngOnDestroy() {
    this._timer$.unsubscribe();
    this.counter$.unsubscribe();
  }

  private _incrementCounter(previous: number): number {
    if(previous == 99) {
      return previous
    } else {
      return ++previous
    }
  }
}
