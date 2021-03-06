import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu/menu.component';
import { LogoComponent } from './menu/logo/logo.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { TableComponent } from './generics/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarComponent } from './generics/editar/editar.component';
import { AlertComponent } from './generics/alert/alert.component';
import { ConfiguracaoComponent } from './Pages/configuracao/configuracao.component';
import { PermissaoComponent } from './Pages/permissao/permissao.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    LogoComponent,
    PrincipalComponent,
    UsuarioComponent,
    TableComponent,
    EditarComponent,
    AlertComponent,
    ConfiguracaoComponent,
    PermissaoComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
