import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../models/user';

@Component({
  selector: 'app-nuestros-platos',
  templateUrl: './nuestros-platos.component.html',
  styleUrls: ['./nuestros-platos.component.css']
})
export class NuestrosPlatosComponent implements OnInit {

  public modeloUsuario: UserModel

  constructor(private serviceUser:UserService) {this.modeloUsuario= new UserModel('', '', '', '')    }

  ngOnInit(): void {
  }

  crear(){
    this.serviceUser.createUser(this.modeloUsuario).subscribe(
      res=>{
        console.log('Mensaje enviado correctamente!', res)
        alert('¡Mensaje enviado correctamente!')
      },
      err=> console.log(err)
    )
  }

}
