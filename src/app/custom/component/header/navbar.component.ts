import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BehaviorSubject, timer} from "rxjs";
import {BadgeValue, Element, InternalEvent} from "../../shared.type";
import {UtilityService} from "../../utility.service";

@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() public navEvent = new EventEmitter<InternalEvent>();

  public counter$: BehaviorSubject<BadgeValue> = new BehaviorSubject<BadgeValue>(1);
  public navElementList: Array<Element> = [];

  public ngOnInit(): void {
    timer(0, 2000)
      .subscribe(r => this.counter$.next(this._incrementCounter(this.counter$.value)));

    this._buildNavElement();
  }

  public navClickHandler(event: string):void {
    this.navEvent.emit(UtilityService.normalizeEvent(event, NavbarComponent));
  }

  private _incrementCounter(previous: BadgeValue): BadgeValue {
    if (previous == 99 || typeof previous === 'string') {
      return "99+";
    } else {
      return ++previous;
    }
  }

  private _buildNavElement(): void {
    this.navElementList = [
      new Element("Home"),
      new Element("Wallet"),
      new Element("Currency"),
      new Element("Stats"),
    ]
  }
}
