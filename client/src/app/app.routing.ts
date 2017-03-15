import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        //component: SearchComponent
    },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
