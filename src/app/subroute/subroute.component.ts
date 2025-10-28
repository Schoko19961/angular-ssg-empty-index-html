import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-subroute',
    template: `<h1>Subroute Component</h1><router-outlet></router-outlet>`,
    imports: [RouterModule]
})
export class SubrouteComponent {
}