import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPage} from '../pages/MainPage/mainPage.component'
import {Navbar} from '../components/navbar/navbar.component'
import {Contactos} from '../pages/contactos/contactos.component'
import {Pokemon} from '../pages/pokemon/pokemon.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    Navbar,
    Contactos,
    Pokemon
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
