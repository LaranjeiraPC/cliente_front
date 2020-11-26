import { Component, Input, OnDestroy, OnInit, ɵConsole } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() url: string;
  @Input() data: any[] = [];
  @Input() colunas: any[] = [];
  @Input() atributos: any[] = [];

  @Input() colunasEditar: any[] = [];
  @Input() atributosEditar: any[] = [];

  private _permissao: boolean = false;

  subscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private rota: Router,
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.subscription = this._usuarioService.get().subscribe(data => {
      if(data.permissao != "Leitura"){
        this._permissao = true;
      }else{
        this._permissao = false;
      }
    });

  }

  editarRegistro(registro: any) {
    this.rota.navigate(['/editar'],
      {
        queryParams: {
          url: this.url,
          id: registro.id,
          colunas: this.colunasEditar,
          atributos: this.atributosEditar
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
