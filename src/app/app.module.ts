import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { EditUserComponent } from './edit_user/edit_user.component'
import { CreateUserComponent } from './create_users/create_user.component'
import { ShowUsersComponent } from './show_users/show_users.component'
import { ShowUserDetailsComponent } from './show_user_details/show_user_details.component'
import { NavBarComponent } from './navBar/navBar.component'
import { FooterComponent } from './footer/footer.component'


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
