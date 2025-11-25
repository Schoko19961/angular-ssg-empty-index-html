import { Component, inject } from "@angular/core";
import { TestBreakpointService } from "../test-breakpoint.service";

@Component({
    selector: 'subsub-component',
    template: `<h1>Subsub Component</h1>`
})
export class SubsubComponent {
    observer = inject(TestBreakpointService);
    doStuff(){
        this.observer.logBreakpoint();
    }
}