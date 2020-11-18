import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private _clienteService: ClienteService
  ) { }
 
  _clienteList: Cliente[];
  _colunasList: string[] = [];
  _atributosList: string[] = [];
  _colunasEditar: string[] = [];
  _atributosEditar: string[] = [];

  ngOnInit() {
    this.consultarCliente();
  }

  consultarCliente(){
    let subscription = this._clienteService.consultarListClientes().subscribe(data => {
      subscription.unsubscribe();
      this._clienteList = data;
      this.montarDadosTabela();
    });
  }

  montarDadosTabela(){
    this._colunasList = ['Id', 'Nome', 'Idade'];
    this._atributosList = ['id', 'nome', 'idade'];
    this._colunasEditar = ['Nome', 'Idade'];
    this._atributosEditar = ['nome', 'idade'];
  }

}
