import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private _usuario: string;
  private _senha: string;
  private _log: string;

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  verificarCampoUsuario(evento: string) {
    if (evento.length > 0) {
      this._usuario = evento;
    }
  }

  verificarCampoSenha(evento: string) {
    if (evento.length > 0) {
      this._senha = evento;
    }
  }

  autenticar() {

    if (this._usuario != null && this._senha != null) {
      let subscription = this._usuarioService.autenticarUsuario(this._usuario, this._senha).subscribe(data => {
        subscription.unsubscribe();
        if (data != null) {
          this._usuarioService.setAutenticar(true);
          this._log = "";
        } else {
          this._usuarioService.setAutenticar(false);
          this._log = "Usuário inválido";
        }
      }, error => {
        this._usuarioService.setAutenticar(false);
        this._log = "Usuário inválido";
      });
    }
  }

}


