import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './generics/editar/editar.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { ConfiguracaoComponent } from './Pages/configuracao/configuracao.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { PermissaoComponent } from './Pages/permissao/permissao.component';
import { PrincipalComponent } from './Pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'editar', component: EditarComponent},
  { path: 'configuracao', component: ConfiguracaoComponent},
  { path: 'permissao', component: PermissaoComponent},
  { path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
