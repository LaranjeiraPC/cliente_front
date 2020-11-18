import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EditarService } from './service/editar.service';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private _object: any[];
  private _id: number;
  private _atributos: string[];
  private _colunas: string[];
  private _url: string;
  private _campo: string;

  constructor(
    private _rota: ActivatedRoute,
    private _location: Location,
    private _service: EditarService,
    private _usuario: UsuarioService
  ) { }

  ngOnInit() {
    this._rota.queryParams.subscribe(
      params => {
        this._url = params['url'];
        this._id = params['id'];
        this._atributos = params['atributos'];
        this._colunas = params['colunas'];

        let subscription = this._service.findRegistro(this._url, this._id).subscribe(data => {
          subscription.unsubscribe();
          if (data) {
            this.converteObjeto(data);
          }
        });

      });
  }

  converteObjeto(data: any) {
    this._object = [];
    this._atributos.forEach(a => {
      this._object.push(data[a]);
    });
  }

  editObject(value: any, id: any) {
    this._object[id] = value;
  }

  salvaRegistro() {
    let json: string = "{";
    for (let index = 0; index < this._atributos.length; index++) {
      let value = this._object[index];
      if (value) {
        if (typeof value === "string") {
          let texto = value.split('.').join('');
          value = texto;
          json += ('"' + this._atributos[index] + '": ' + '"' + value + '"' + ',');
        }else{
          json += ('"' + this._atributos[index] + '": ' + value + ',');
        }
      }
    }
    json = json.substr(0, json.length - 1);
    json += "}";
    let parse = JSON.parse(json);
    
    let subscription = this._service.update(this._url, this._id, parse).subscribe(data => {
      subscription.unsubscribe();
      this._usuario.setAlert(data.status, data.message);
      this.voltar();
    },(err) => {
      this.voltar();
    });
  }

  getType(index: number):string {
    let campo: string = this._colunas[index];
    if(campo.indexOf('Idade') >= 0){
        return 'number';
    } else return 'campoTexto'; 
}

  voltar() {
    this._location.back();
  }

}
