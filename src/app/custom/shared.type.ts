import {ThemePalette} from "@angular/material/core/common-behaviors/color";

export class Element {
  text!: string;

  constructor(text: string) {
    this.text = text;
  }
}

export class BadgeElement extends Element {
  icon: string;
  color: ThemePalette;

  private constructor(text: string, icon: string, color: ThemePalette) {
    super(text);
    this.icon = icon;
    this.color = color;
  }

  static of(text: string, icon?: string, color?: ThemePalette): BadgeElement {
    return new BadgeElement(text, icon ?? "bolt", color ?? undefined)
  }
}

export type BadgeValue = number | string;
export type InternalEvent = {
  parent: any;
  source: string;
  info?: string;
  _internal: string
}
