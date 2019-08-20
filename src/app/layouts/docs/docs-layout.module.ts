import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsLayoutComponent } from './docs-layout.component';

import { NgxMicroFrontendPagesModule } from '../../../../projects/ngx-micro-frontend-pages/src/lib/ngx-micro-frontend-pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxMicroFrontendPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocsLayoutComponent,
      },
    ]),
  ],
  declarations: [DocsLayoutComponent],
})
export class DocsLayoutModule {}
