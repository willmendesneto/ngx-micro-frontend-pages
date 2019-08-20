import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { ListItemPageComponent } from './list-item-page/list-item-page.component';
import { ListItemsPageComponent } from './list-items-page/list-items-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DocsPageComponent,
    ListItemPageComponent,
    ListItemsPageComponent,
    CheckoutPageComponent,
  ],
  imports: [],
  exports: [
    HomePageComponent,
    DocsPageComponent,
    ListItemPageComponent,
    ListItemsPageComponent,
    CheckoutPageComponent,
  ],
})
export class NgxMicroFrontendPagesModule {}
