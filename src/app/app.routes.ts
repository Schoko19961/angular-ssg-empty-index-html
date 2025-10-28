import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'subroute',
    loadChildren: () => import('./subroute/subroute.module').then(m => m.SubrouteModule),
}];
