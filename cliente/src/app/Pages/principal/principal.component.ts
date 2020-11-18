import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy {

  usuarioSubscription: Subscription;

  private _usuario: string = "";
  
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => { 
      this._usuario = data.usuario.toUpperCase();
     });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

}
