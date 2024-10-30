import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes'; 
import { HomeBannerComponent } from '@/home/components/banner/banner.component'
import { HeaderComponent } from '@/layout/header/header.component'
import { PageNotFoundComponent } from '@/page-not-found/page-not-found.component'
// import { RouterLink, RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  // declarations: [AppComponent, HeaderComponent, HomeBannerComponent, PageNotFound],
  // imports: [
  //   BrowserModule,
  //   BrowserAnimationsModule,
  //   RouterModule.forRoot(routes), // Needed for router directives like `routerLink`
  //   CommonModule, // Centralizes `*ngFor`, `*ngIf`, etc.
  //   PageNotFound,
  //   RouterLink, RouterOutlet
  // ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
