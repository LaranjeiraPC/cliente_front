import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css']
})
export class PermissaoComponent implements OnInit {

  private _users: Usuario[];

  _colunasList: string[] = [];
  _atributosList: string[] = [];
  _colunasEditar: string[] = [];
  _atributosEditar: string[] = [];

  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() { 
    this.consultarUsuarios();
  } 

  consultarUsuarios(){
    let subscription = this._usuarioService.getConsultarUsuarios().subscribe(data => {
      subscription.unsubscribe();
      this._users = data;
      this.montarDadosTabela();
    });
  }

  montarDadosTabela(){
    this._colunasList = ['Id', 'Usuario', 'Tipo Autenticação'];
    this._atributosList = ['id', 'usuario', 'permissao'];
    this._colunasEditar = ['Tipo Autenticação'];
    this._atributosEditar = ['permissao'];
  }

}
