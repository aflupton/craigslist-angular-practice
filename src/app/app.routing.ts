import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SectionsComponent } from './sections/sections.component';
import { ServiceDetailsComponent } from './servicedetails/servicedetails.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'sections',
    component: SectionsComponent
  },
  {
    path: 'services/:id',
    component: ServiceDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);