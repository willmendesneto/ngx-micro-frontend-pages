import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';

import { NgxMicroFrontendPagesModule } from '../../../../projects/ngx-micro-frontend-pages/src/lib/ngx-micro-frontend-pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxMicroFrontendPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeLayoutComponent,
      },
    ]),
  ],
  declarations: [HomeLayoutComponent],
})
export class HomeLayoutModule {}
