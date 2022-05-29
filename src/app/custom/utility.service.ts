import { Injectable } from '@angular/core';
import {InternalEvent} from "./shared.type";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public static normalizeEvent(event: string, sender: any): InternalEvent {

    return {
      parent: sender,
      source: event,
      _internal: sender?.name.toLowerCase().replace("component", "_") + event.toLowerCase()
    } as InternalEvent;
  }
}
