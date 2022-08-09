import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './shared/data-resolver.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserDetailsComponent }],
    resolve: [DataResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
