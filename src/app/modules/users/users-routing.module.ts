import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'list',
    loadChildren: () => import('./components/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
