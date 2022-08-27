import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataResolverService } from '../shared/data-resolver.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    UserSearchComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: UsersComponent,resolve: [DataResolverService] },
      { path: ':id', component: UserDetailsComponent, },
    ]),
    CommonModule,
    HttpClientModule,
  ],
})
export class UsersModule {}
