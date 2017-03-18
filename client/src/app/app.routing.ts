import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './Shared/index';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
