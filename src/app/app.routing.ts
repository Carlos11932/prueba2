import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit_user/edit_user.component';
import { CreateUserComponent } from './create_users/create_user.component';
import { ShowUsersComponent } from './show_users/show_users.component';



const appRoutes: Routes = [
	{path: '', component: HomeComponent},
  {path: 'create_user', component: CreateUserComponent},
  {path: 'show_users', component: ShowUsersComponent},
  {path: 'edit_user/:id', component: EditUserComponent},
	{path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
