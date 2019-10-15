import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { Home2LayoutModule } from './layouts/home-2/home2-layout.module';
import { Home2LayoutComponent } from './layouts/home-2/home2-layout.component';

const routes: Routes = [
  {
    path: 'checkout',
    loadChildren: () =>
      import('./layouts/checkout/checkout-layout.module')
        .then(mod => mod.CheckoutLayoutModule),
    data: {
      title: 'Checkout Page',
      description: 'Checkout Page Description',
    },
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./layouts/docs/docs-layout.module')
        .then(mod => mod.DocsLayoutModule),
    data: {
      title: 'Docs Page',
      description: 'Docs Page Description',
    },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layouts/home/home-layout.module')
        .then(mod => mod.HomeLayoutModule),
    data: {
      title: 'Home Page',
      description: 'Home Page Description',
      preload: true,
    },
  },
  {
    path: 'home2',
    component: Home2LayoutComponent,
    data: {
      title: 'Home Page2',
      description: 'Home Page2 Description',
    },
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    Home2LayoutModule,
    RouterModule.forRoot(routes, {
      enableTracing: false, // !environment.production, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
