import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2LayoutComponent } from './home2-layout.component';

import { NgxMicroFrontendPagesModule } from '../../../../projects/ngx-micro-frontend-pages/src/lib/ngx-micro-frontend-pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxMicroFrontendPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: Home2LayoutComponent,
      },
    ]),
  ],
  declarations: [Home2LayoutComponent],
})
export class Home2LayoutModule {}
