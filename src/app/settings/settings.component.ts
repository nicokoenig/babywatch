import { Component, OnInit } from "@angular/core";
import { BabywatchService } from "../babywatch.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "bw-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(
    private babyService: BabywatchService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  getBabyName() {
    return this.babyService.babyName;
  }

  saveBabyName(babyName: string) {
    this.babyService.babyName = babyName.trim();
    this.snackbar.open("Der Babyname wurde gespeichert", "", {
      duration: 2000
    });
  }

  clearTimeline() {
    this.babyService.clearTimeline();
  }
}
