import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { NuestrosPlatosComponent } from './nuestros-platos/nuestros-platos.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AdminComponent} from './admin/admin.component';
import { ModificarComponent} from './modificar/modificar.component';
import {UserService} from './service/user.service';
import { ModificarReservaComponent } from './modificar-reserva/modificar-reserva.component';



const appRoutes: Routes = [
  {path: 'inicio' , component: IndexContentComponent},
  {path: 'nuestrosPlatos', component: NuestrosPlatosComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'modificar/:id', component: ModificarComponent},
  {path: 'modificarReserva/:id', component: ModificarReservaComponent},

  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
  
 ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexContentComponent,
    NuestrosPlatosComponent,
    ReservaComponent,
    AdminComponent,
    ModificarComponent,
    ModificarReservaComponent
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
