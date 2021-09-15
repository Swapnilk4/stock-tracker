import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    CreateStockComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
