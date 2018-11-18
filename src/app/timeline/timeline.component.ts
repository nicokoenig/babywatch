import { Component, OnInit } from "@angular/core";
import { BabywatchService } from "../babywatch.service";

@Component({
  selector: "bw-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  constructor(private babyService: BabywatchService) {}

  ngOnInit() {}

  getTimeline() {
    return this.babyService.getTimeline();
  }
  getBabyName() {
    return this.babyService.babyName || "Das Baby";
  }
}
