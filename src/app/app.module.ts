import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { TextTitleComponent } from './core/components/text-title/text-title.component';
import { HomeComponent } from './home/home.component';
import { CarouselSelectionComponent } from './home/components/carousel-selection/carousel-selection.component';
import {HttpClientModule} from '@angular/common/http';
import { ListsComponent } from './lists/lists.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {DescriptionPipe} from './pipes/DescriptionPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextTitleComponent,
    HomeComponent,
    CarouselSelectionComponent,
    ListsComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
