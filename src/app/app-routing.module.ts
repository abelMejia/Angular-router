import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadModules } from './preload-modules';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    data: { preload: true }
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/components/index/index.module').then(m => m.IndexModule),
    data: { preload: true, delay: 4000 }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/home/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/costumers/costumers.module').then(m => m.CostumersModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule),
  },
  { path: '**', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadModules }
    )
  ],
  providers: [PreloadModules],
  exports: [RouterModule]
})
export class AppRoutingModule { }
