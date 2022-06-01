import {Component, Input} from '@angular/core';
import {BadgeElement} from "../../shared.type";

@Component({
  selector: 'app-task',
  template: `
    <div class="task-container">
      <h3>{{task}}</h3>
      <p>{{description}}</p>
      <mat-chip-list class="badge-container" *ngIf="badgeList.length > 0">
        <mat-chip *ngFor="let badge of badgeList"
                  [color]="badge.color" [selected]="badge.color != undefined">
          <mat-chip-avatar>
            <mat-icon>{{badge.icon}}</mat-icon>
          </mat-chip-avatar>
          {{badge.text}}
        </mat-chip>
      </mat-chip-list>
    </div>
  `,
  styles: [`
    .task-container {
      //width: 500px;
      width: fit-content;
      max-width: 350px;
      block-size: fit-content;
      display: block;
      overflow: hidden;
      background: #afaeae;
      border: black 1px solid;
      border-radius: 5px;
      margin: 10px;

      & h3 {
        background: black;
        color: white;
        padding-top: 10px;
        text-align: center;
        font-family: monospace;
        font-size: 13px;
      }

      & p {
        color: black;
        margin: 0;
        font-size: 13px;
        padding: 10px;
      }

      .badge-container {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;

        & mat-chip {
          width: fit-content;
          block-size: fit-content;
        }
      }


    }
  `]
})
export class TaskComponent {

  @Input() public task!: string;
  @Input() public description?: string | undefined;
  @Input() public badgeList: BadgeElement[] = [];
}

