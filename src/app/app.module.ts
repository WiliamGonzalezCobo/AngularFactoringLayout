import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/components/layout/layout.component';
import { Error404Component } from './modules/components/error404/error404.component';
import { NavigationModule } from './modules/navigation/navigation.module';
import { LayoutLoginComponent } from './modules/components/layout-login/layout-login.component';;


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Error404Component,
    LayoutLoginComponent,
    LayoutLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }