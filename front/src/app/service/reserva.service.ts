import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl="http://localhost:3000/"

  constructor(private http: HttpClient) { }

  createReserva(reserva){
    return this.http.post<any>(this.apiUrl + "reserva/create", reserva)         
  }

  getReserva(){
    return this.http.get<any>(this.apiUrl + 'reserva/get')
  }

  /* Mostrar uno solo */

getOne(id){

  return this.http.get<any>(this.apiUrl + 'reserva/get/' + id)   
}

editReserva(reservaParams){
  return this.http.put<any>(this.apiUrl + 'reserva/update/' + reservaParams._id, reservaParams)  
}

deleteReserva(reserva){
  const _id= reserva._id
  return this.http.delete<any>(this.apiUrl + 'reserva/delete/' + _id)  
}
}
