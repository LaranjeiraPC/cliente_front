import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() url: string;
  @Input() data: any[] = [];
  @Input() colunas: any[] = [];
  @Input() atributos: any[] = [];

  @Input() colunasEditar: any[] = [];
  @Input() atributosEditar: any[] = [];

  constructor(
    public dialog: MatDialog,
    private rota: Router,
  ) { }

  ngOnInit(): void {
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

}
