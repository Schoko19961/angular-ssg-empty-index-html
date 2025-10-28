import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubrouteComponent } from './subroute.component';
import { SubsubComponent } from './subsub.component';
import { routerGuard } from './router.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SubrouteComponent,
        canActivate: [routerGuard],
        children: [
            {
                path: 'subsub',
                component: SubsubComponent
            }
        ]
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export class SubrouteModule {
  constructor(){
  }
}
