import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Contactos } from '../pages/contactos/contactos.component'
import { Pokemon} from '../pages/pokemon/pokemon.component'
import { MainPage} from '../pages/MainPage/mainPage.component'
const routes: Routes = [
  { path: '', redirectTo: '/Contactos', pathMatch: 'full' },
   {path:'Contactos',component: Contactos},
   {path:'Pokemon', component : Pokemon},
   {path: '*' , component : Contactos}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
