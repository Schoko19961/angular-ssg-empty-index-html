import { ErrorHandler, inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class CustomErrorHandler extends ErrorHandler implements ErrorHandler {
    // activatedRoute = inject(ActivatedRoute)
  override handleError(error: Error): void {
    super.handleError(error);
  }
}
