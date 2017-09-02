import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { EditUserComponent } from './components/edit_user/edit_user.component'
import { CreateUserComponent } from './components/create_users/create_user.component'
import { ShowUsersComponent } from './components/show_users/show_users.component'
import { ShowUserDetailsComponent } from './components/show_user_details/show_user_details.component'
import { NavBarComponent } from './components/navBar/navBar.component'
import { FooterComponent } from './components/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUserComponent,
    CreateUserComponent,
    ShowUsersComponent,
    ShowUserDetailsComponent,
    NavBarComponent,
    FooterComponent
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
