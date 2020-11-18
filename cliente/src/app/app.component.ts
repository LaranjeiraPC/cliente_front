import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from './Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  usuarioSubscription: Subscription;

  private _logado: boolean = false;
  
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._logado = data.autenticado;
    });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

}
