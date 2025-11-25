import { inject, Injectable } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { ActivatedRoute } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TestBreakpointService {
    private readonly observer = inject(BreakpointObserver);
    private readonly routes = inject(ActivatedRoute);
    logBreakpoint() {
        this.observer.observe(['(max-width: 600px)']).subscribe((result: any) => {
            if (result.matches) {
                console.log('Screen is less than 600px wide.');
            } else {
                console.log('Screen is at least 600px wide.');
            }
        });
    }
}