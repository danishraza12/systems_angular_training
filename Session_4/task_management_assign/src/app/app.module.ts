import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeatureModule } from 'src/modules/feature/feature.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, FeatureModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
