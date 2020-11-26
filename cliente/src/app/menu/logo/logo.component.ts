import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  private _user: string;
  private _perfil: any = "../../../assets/perfil.jpg";
  picture: ImageSnippet;

  usuarioSubscription: Subscription;
  
  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._user = data.usuario;

     this._perfil = "data:image/jpg;base64," + data.image;
    });
  }

}
