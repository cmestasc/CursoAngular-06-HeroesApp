import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AgregarComponent } from './pages/agregar/agregar.component'
import { HeroeComponent } from './pages/heroe/heroe.component'
import { HomeComponent } from './pages/home/home.component'
import { ListadoComponent } from './pages/listado/listado.component'
import { BuscarComponent } from './pages/buscar/buscar.component'
import { HeroesRoutingModule } from './heroes-routing.module'
import { MaterialModule } from '../material/material.module'
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component'
import { ImagenPipe } from './pipes/imagen.pipe'
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component'

@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule {}
