import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {ReservaService} from '../service/reserva.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users=[] 
  reservas=[]

  constructor(private userService: UserService, private reservaService: ReservaService) { }

  ngOnInit(): void { this.showAllUsers() , this.showAllReservas() }

  /* Mensaje */

  showAllUsers(){
    this.userService.getUsers().subscribe(
      res=>{ this.users= res
      }, err=> console.log(err)
    )
  }

  delete(userDelete){
    this.userService.deleteUser(userDelete).subscribe(
      res=>{ 
        const index= this.users.indexOf(userDelete)
        if (index>-1) {
          this.users.splice(index, 1)
          
        }
      },
       err=> console.log(err)
    )
  }

  /* Reserva */

  showAllReservas(){
    this.reservaService.getReserva().subscribe(
      res=>{ this.reservas= res
      }, err=> console.log(err)
    )
  }

  deleteReserva(reservaDelete){
    this.reservaService.deleteReserva(reservaDelete).subscribe(
      res=>{ 
        const index= this.reservas.indexOf(reservaDelete)
        if (index>-1) {
          this.reservas.splice(index, 1)
          
        }
      },
       err=> console.log(err)
    )
  }

  
}
