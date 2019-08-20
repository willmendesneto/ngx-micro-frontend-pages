import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './common/common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, FormsModule, BrowserModule, AppRoutingModule, AppCommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
