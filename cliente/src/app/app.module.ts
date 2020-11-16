import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu/menu.component';
import { LogoComponent } from './menu/logo/logo.component';
import { PrincipalComponent } from './Pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    LogoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
