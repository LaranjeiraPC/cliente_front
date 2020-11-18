import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './generics/editar/editar.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { PrincipalComponent } from './Pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'editar', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
