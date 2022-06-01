import {Component} from '@angular/core';
import {single} from './data';
import {Color} from "@swimlane/ngx-charts/lib/utils/color-sets";
import {BadgeElement} from "../../shared.type";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public single!: any[];
  public badgeList: BadgeElement[] = [
    BadgeElement.of("Bugs", "bug_report", "warn"),
    BadgeElement.of("Component" , "css", "primary"),
    BadgeElement.of("Release"),
  ];
  public view: [number, number] = [700, 400];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  } as Color;

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
