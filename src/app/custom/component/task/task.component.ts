import {Component, Input} from '@angular/core';
import {BadgeElement, Status} from "../../shared.type";

@Component({
  selector: 'app-task',
  template: `
    <div id="taskContainerId" class="task-container">
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

    :host {
      --primary: black;
      --secondary: #afaeae;
      --font-primary: white;
      --font-secondary: black;
    }

    .dark {
      --primary: #afaeae;
      --secondary: black;
      --font-primary: black;
      --font-secondary: white;
    }

    .task-container {
      width: fit-content;
      max-width: 350px;
      block-size: fit-content;
      display: block;
      overflow: hidden;
      background: var(--secondary);
      border: var(--primary) 1px solid;
      border-radius: 5px;
      margin: 10px;

      & span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px;

        background: var(--primary);
        color: var(--font-primary);
        text-align: center;
        font-family: monospace;
        font-size: 13px;
      }

      & p {
        color: var(--font-secondary);
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

  /**
   * Task status.
   *
   * @see {@link Status}
   */
  @Input() public status?: Status = 'TODO';

  /**
   * Toggle dark mode for the component.
   * @default false.
   *
   * <p>
   * if true: dark mode is On
   * <br>
   * if false: dark mode is Off
   * </p>
   * @type boolean
   * @param value
   */
  @Input() set darkMode(value: boolean) {
    this._dark = value;
    this._toggleDark();
  }

  get darkMode(): boolean {
    return this._dark;
  }

  /**
   * @ignore
   * @private
   */
  private _dark: boolean = false;

  /**
   * @ignore
   * @private
   */
  private _toggleDark(): void {
    const element = document.getElementById("taskContainerId");
    if (element == null)
      return;
    else if (this._dark)
      element.classList.add("dark");
    else
      element.classList.remove("dark");
  }
}

