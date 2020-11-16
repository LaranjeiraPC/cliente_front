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

  ngOnInit() {
    this.consultarCliente();
  }

  consultarCliente(){
    let subscription = this._clienteService.consultarListClientes().subscribe(data => {
      subscription.unsubscribe();
      this._clienteList = data;
    });
  }

}
