import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';
import { ConfigGlassCliente } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigGlassCliente.api.base_url + "usuario";

  private static usuario = new Usuario();
  private static observable : BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(UsuarioService.usuario);
  
  get():BehaviorSubject<Usuario>{
    return UsuarioService.observable;
  }
  
  setAutenticar(autenticado: boolean){
    UsuarioService.usuario.autenticado = autenticado;
    UsuarioService.observable.next(UsuarioService.usuario);  
  }

  autenticarUsuario(usuario: string, senha: string): Observable<any>{
    return this.http.get(this.URL+"/autenticar/" + usuario + "/" + senha);
  }
  
}