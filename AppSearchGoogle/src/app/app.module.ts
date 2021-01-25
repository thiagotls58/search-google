import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SearchService } from './services/SearchService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchService,
    { provide: APP_BASE_HREF, useValue: '/' } // configuração do prefixo da app
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
