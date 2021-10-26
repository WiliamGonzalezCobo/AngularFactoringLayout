import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Error404Component } from './modules/components/error404/error404.component';
import { LayoutLoginComponent } from './modules/components/layout-login/layout-login.component';
import { RegisterModule } from './modules/register/register.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: 'invoice',
    component: LayoutComponent,
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: 'profile',
    component: LayoutComponent,
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: 'login',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'register',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'registerpassword',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'registerbusiness',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'registeragent',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'registerpep',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'forgot',
    component: LayoutLoginComponent,
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RegisterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

