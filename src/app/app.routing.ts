import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SectionsComponent } from './sections/sections.component';
import { ServiceDetailsComponent } from './servicedetails/servicedetails.component';
import { AdminComponent }   from './admin/admin.component';
import { AboutComponent } from './about/about.component';

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
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
