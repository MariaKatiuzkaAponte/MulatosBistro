import { Component, OnInit } from '@angular/core';
import {ReservaService} from '../service/reserva.service';
import { Router , ActivatedRoute} from '@angular/router';
import { ReservaModel } from '../models/reserva';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {

  public reserva: ReservaModel;
  public idReserva;

  constructor(private reservaService: ReservaService,
    private routeParams: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

    this.idReserva = this.routeParams.snapshot.paramMap.get('id');
    this.getDataUser()
  }

  getDataUser(){
    this.reservaService.getOne(this.idReserva).subscribe(
      res=>{
        this.reserva= res
      }, 
      err=> console.log(err)
    )
  }

  
/* Modificar */
updateReserva(){
  this.reservaService.editReserva(this.reserva).subscribe(
    res=>{
      if (res.message=='La reserva se ha actualizado') {
        alert('Reserva modificada correctamente!')
        this._router.navigate(['/admin'])
      }
    },
    err=> console.log(err)
  )
}

}
