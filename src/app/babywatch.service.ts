import { Injectable } from "@angular/core";

export interface TimelineEvent {
  eventType: TimelineEventType;
  date: Date;
  comment?: string;
}

export interface TimelineEventType {
  name: string;
  title: string;
}

export const timelineEventTypes: TimelineEventType[] = [
  {
    name: "sleep",
    title: "hat geschlafen"
  },
  {
    name: "diaper",
    title: "hat in die Windel gemacht"
  },
  {
    name: "feed",
    title: "hat getrunken"
  },
  {
    name: "bath",
    title: "wurde gebadet"
  }
];

@Injectable({
  providedIn: "root"
})
export class BabywatchService {
  babyName: string = "";
  private timeline: TimelineEvent[] = [];
  constructor() {
    this.generateFakeEvents();
  }

  generateFakeEvents() {
    for (let i = 0; i < 4; i++) {
      this.addRandomTimelineEvent();
    }
  }

  addTimelineEvent(newEvent: TimelineEvent) {
    this.timeline = [newEvent, ...this.timeline];
  }

  addRandomTimelineEvent() {
    const eventType =
      timelineEventTypes[Math.floor(Math.random() * timelineEventTypes.length)];
    this.addTimelineEvent({
      eventType: eventType,
      date: new Date()
    });
  }

  clearTimeline() {
    this.timeline.length = 0;
  }

  getTimeline(): TimelineEvent[] {
    return this.timeline;
  }
}
