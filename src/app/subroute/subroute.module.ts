import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubrouteComponent } from './subroute.component';
import { SubsubComponent } from './subsub.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SubrouteComponent,
        canActivate: [],
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
