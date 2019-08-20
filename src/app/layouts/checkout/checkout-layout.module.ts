import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutLayoutComponent } from './checkout-layout.component';

import { NgxMicroFrontendPagesModule } from '../../../../projects/ngx-micro-frontend-pages/src/lib/ngx-micro-frontend-pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxMicroFrontendPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutLayoutComponent,
      },
    ]),
  ],
  declarations: [CheckoutLayoutComponent],
})
export class CheckoutLayoutModule {}
