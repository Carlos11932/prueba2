import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { EditUserComponent } from './edit_user/edit_user.component'
import { CreateUserComponent } from './create_users/create_user.component'
import { ShowUsersComponent } from './show_users/show_users.component'
import { NavBarComponent } from './navBar/navBar.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUserComponent,
    CreateUserComponent,
    ShowUsersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
