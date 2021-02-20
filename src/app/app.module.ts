import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterDropdownComponent} from './filter-dropdown/filter-dropdown.component';
import {CardComponent} from './card/card.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FilterDropdownComponent,
    CardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap:[AppComponent]
})
export class AppModule {
}
