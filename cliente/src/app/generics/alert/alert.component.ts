import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }

  usuarioSubscription: Subscription;
  private _status: string;
  private _message: string;
  private _enable: boolean = false;
  
  ngOnInit() {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._message = data.message;
      this._status = data.status;

      if(this._status != null){
        this._enable = true;
        this.carregarAlert();
      }
    });
  }

  async carregarAlert(): Promise<void> {
    await this.delay(2000);
    this._enable = false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
}
