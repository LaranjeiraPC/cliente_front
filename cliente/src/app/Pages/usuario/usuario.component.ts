import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private _usuario: string;
  private _senha: string;
  private _user: Usuario;
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
        this._user = data;
        if (this._user != null) {
          this._usuarioService.setAutenticar(true, this._user.usuario);
          this._log = "";
        } else {
          this._usuarioService.setAutenticar(false, null);
          this._log = "Usuário inválido";
        }
      }, error => {
        this._usuarioService.setAutenticar(false, null);
        this._log = "Usuário inválido";
      });
    }
  }

}


