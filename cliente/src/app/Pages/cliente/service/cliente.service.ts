import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigGlassCliente } from 'src/config';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigGlassCliente.api.base_url + "cliente";
  
  consultarListClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL+"/consultaCliente");
  }

}
