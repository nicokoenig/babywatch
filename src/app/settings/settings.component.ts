import { Component, OnInit } from "@angular/core";
import { BabywatchService } from "../babywatch.service";
import { MatSnackBar, MatDialog } from "@angular/material";
import { DeleteTimelineDialogComponent } from "../delete-timeline-dialog/delete-timeline-dialog.component";

@Component({
  selector: "bw-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(
    private babyService: BabywatchService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
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

  getBabyNameWithFallback() {
    return this.babyService.babyName || "das Baby";
  }

  clearTimeline() {
    const dialogRef = this.dialog.open(DeleteTimelineDialogComponent, {
      width: "80%",
      maxWidth: "450px",
      data: this.getBabyNameWithFallback()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.babyService.clearTimeline();
      }
    });
  }
}
