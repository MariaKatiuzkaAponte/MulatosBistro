import { Component, OnInit } from '@angular/core';
import {ReservaService} from '../service/reserva.service';
import {ReservaModel} from '../models/reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  public modeloReserva: ReservaModel

  constructor(private serviceReserva:ReservaService) {  this.modeloReserva= new ReservaModel('', 0, '', 0, '', '', '') }

  ngOnInit(): void {
  }

  crearReserva(){
    this.serviceReserva.createReserva(this.modeloReserva).subscribe(
      res=>{
        console.log('¡Solicitud de reserva creada correctamente!', res)
        alert('¡Solicitud de reserva creada correctamente!')
      },
      err=> console.log(err)
    )
  }

}
