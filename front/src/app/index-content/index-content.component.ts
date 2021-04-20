import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../models/user';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  public modeloUsuario: UserModel

  constructor(private serviceUser:UserService) { this.modeloUsuario= new UserModel('', '', '', '') }

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
