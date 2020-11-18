import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente.model';
import { ConfigGlassCliente } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigGlassCliente.api.base_url;
  
  findRegistro(url_controller: string, id: number): Observable<any>{
    return this.http.get(this.URL + url_controller + "/id/" + id );
  }

  update(url: string, id: number, json:any) : Observable<any>{
    return this.http.put((this.URL + url + "/" + id), json);
  }

}
