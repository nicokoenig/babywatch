import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import de from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TimelineComponent } from "./timeline/timeline.component";
import { SettingsComponent } from "./settings/settings.component";
import { AddEventComponent } from "./add-event/add-event.component";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatIconRegistry,
  MatBottomSheetModule
} from "@angular/material";

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SettingsComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-de" }],
  entryComponents: [AddEventComponent],
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
