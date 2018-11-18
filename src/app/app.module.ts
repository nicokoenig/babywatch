import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import de from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TimelineComponent } from "./timeline/timeline.component";
import { SettingsComponent } from "./settings/settings.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { DeleteTimelineDialogComponent } from "./delete-timeline-dialog/delete-timeline-dialog.component";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatIconRegistry,
  MatBottomSheetModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SettingsComponent,
    AddEventComponent,
    DeleteTimelineDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-de" }],
  entryComponents: [AddEventComponent, DeleteTimelineDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      "feed",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/feed.svg")
    );
    this.iconRegistry.addSvgIcon(
      "bath",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/bath.svg")
    );
    this.iconRegistry.addSvgIcon(
      "diaper",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/diaper.svg")
    );
    this.iconRegistry.addSvgIcon(
      "sleep",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/sleep.svg")
    );
  }
}
