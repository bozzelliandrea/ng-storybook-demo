export class Element {
  text!: string;

  constructor(text: string) {
    this.text = text;
  }
}
export type BadgeValue = number | string;
export type InternalEvent = {
  parent: any;
  source: string;
  info?: string;
  _internal: string
}
