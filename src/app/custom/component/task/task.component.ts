import {Component, Input} from '@angular/core';
import {BadgeElement, Status} from "../../shared.type";

@Component({
  selector: 'app-task',
  template: `
    <div class="task-container">
      <span>
        {{task}}
        <mat-chip *ngIf="status"
                  [selected]="status === 'PROGRESS' || status === 'END'"
                  [color]="status === 'PROGRESS'
                            ? 'primary'
                            : status === 'END'
                                ? 'accent'
                                : null">
          {{status}}
        </mat-chip>
      </span>
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
      width: fit-content;
      max-width: 350px;
      block-size: fit-content;
      display: block;
      overflow: hidden;
      background: #afaeae;
      border: black 1px solid;
      border-radius: 5px;
      margin: 10px;

      & span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px;

        background: black;
        color: white;
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

  /**
   * The title of the created task.
   */
  @Input() public task!: string;

  /**
   * A description for the task, the content explain the scope of the task or what the user need to know before start.
   * Param is nullable
   */
  @Input() public description?: string | undefined;

  /**
   * List of badge used for tag the task.
   * Each badge is an implementation of {@link BadgeElement} class.
   *
   * Param is nullable
   *
   * @code
   *
   * <p>
   * hint:
   * Create a new badge with {@link BadgeElement#of} method, only text param is required,
   * the of method creates one default instance.
   * </p>
   *
   * @example
   * BadgeElement.of("Bugs", "bug_report", "warn");
   * BadgeElement.of("Component" , "css", "primary");
   * BadgeElement.of("Release");
   *
   *
   * @example
   * [
   *   {
   *     "text": "Bugs",
   *     "icon": "bug_report",
   *     "color": "warn"
   *   }
   * ]
   */
  @Input() public badgeList: BadgeElement[] = [];

  @Input() public status?: Status
}

