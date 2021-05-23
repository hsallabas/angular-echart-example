import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { ProgressInterceptor } from './interceptors/progress.interceptor';
import { ProgressBarService } from './services/progress-bar.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService] },
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
