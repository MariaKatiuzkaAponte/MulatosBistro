import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl="http://localhost:3000/"

  constructor(private http: HttpClient) { }

  createUser(user){
    return this.http.post<any>(this.apiUrl + "contacto/create", user)         /* Ese contacto create es la ruta que creamos en la api para Post */ 
  }

  getUsers(){
    return this.http.get<any>(this.apiUrl + 'contacto/get')
  }

  /* Mostrar uno solo */

getOne(id){

  return this.http.get<any>(this.apiUrl + 'contacto/get/' + id)   /* Recordando que ese contacto/get/:id es la ruta que colocamos en nuestra api */
}

editUser(userParams){
  return this.http.put<any>(this.apiUrl + 'contacto/update/' + userParams._id, userParams)  
}

deleteUser(user){
  const _id= user._id
  return this.http.delete<any>(this.apiUrl + 'contacto/delete/' + _id)  
}
}
