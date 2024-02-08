import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFormatPipesComponent } from './text-format-pipes/text-format-pipes.component';
import { NumberFormatPipesComponent } from './number-format-pipes/number-format-pipes.component';
import { DatePipesComponent } from './date-pipes/date-pipes.component';
import { CurrencyPipesComponent } from './currency-pipes/currency-pipes.component';
import { DecimalPipesComponent } from './decimal-pipes/decimal-pipes.component';
import { JsonPipesComponent } from './json-pipes/json-pipes.component';
import { PercentPipesComponent } from './percent-pipes/percent-pipes.component';
import { SlicePipesComponent } from './slice-pipes/slice-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFormatPipesComponent,
    NumberFormatPipesComponent,
    DatePipesComponent,
    CurrencyPipesComponent,
    DecimalPipesComponent,
    JsonPipesComponent,
    PercentPipesComponent,
    SlicePipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
