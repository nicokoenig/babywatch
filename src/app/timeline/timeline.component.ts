import { Component, OnInit } from "@angular/core";
import { BabywatchService } from "../babywatch.service";
import { MatBottomSheet } from "@angular/material";
import { AddEventComponent } from "../add-event/add-event.component";

@Component({
  selector: "bw-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  constructor(
    private babyService: BabywatchService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {}

  getTimeline() {
    return this.babyService.getTimeline();
  }

  getBabyName() {
    return this.babyService.babyName || "Das Baby";
  }

  addEvent() {
    this.bottomSheet.open(AddEventComponent);
  }
}
