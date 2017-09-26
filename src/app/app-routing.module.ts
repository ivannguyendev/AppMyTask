import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, AppGreetingComponent } from './app.component';
import { MyTaskComponent } from './my-task/my-task.component';

var appRoutes: Routes = [
 
  { path: 'wellcome', component: AppGreetingComponent, },
  { path: 'mytask', component: MyTaskComponent, },
  { path:'',redirectTo:'wellcome', pathMatch: 'full' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
