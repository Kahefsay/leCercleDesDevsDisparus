import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { TextTitleComponent } from './core/components/text-title/text-title.component';
import { HomeComponent } from './home/home.component';
import { CarouselSelectionComponent } from './home/components/carousel-selection/carousel-selection.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextTitleComponent,
    HomeComponent,
    CarouselSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
