import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DensityGraphComponent } from './components/density-graph/density-graph.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyViaCDNModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;
PlotlyViaCDNModule.setPlotlyVersion('1.55.2');
PlotlyViaCDNModule.setPlotlyBundle('basic');

@NgModule({
  declarations: [
    AppComponent,
    DensityGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    CommonModule,
    PlotlyViaCDNModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
