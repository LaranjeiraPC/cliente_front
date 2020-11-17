import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'cliente', component: ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
