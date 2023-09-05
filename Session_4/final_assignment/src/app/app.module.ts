import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeatureModule } from 'src/modules/feature/feature.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    AuthModule,
    FeatureModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
