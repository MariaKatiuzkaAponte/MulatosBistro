import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import { Router , ActivatedRoute} from '@angular/router';
import { UserModel } from '../models/user';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public user: UserModel;
  public idUser;

  constructor( private userService: UserService,
    private routeParams: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.idUser = this.routeParams.snapshot.paramMap.get('id');
    this.getDataUser()
  }

  getDataUser(){
    this.userService.getOne(this.idUser).subscribe(
      res=>{
        this.user= res
      }, 
      err=> console.log(err)
    )
  }

  
/* Modificar */
update(){
  this.userService.editUser(this.user).subscribe(
    res=>{
      if (res.message=='El mensaje se ha actualizado') {
        alert('¡Mensaje modificado correctamente!')
        this._router.navigate(['/admin'])
      }
    },
    err=> console.log(err)
  )
}


}
