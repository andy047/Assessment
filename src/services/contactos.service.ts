import { Injectable } from '@angular/core'
import { Contacto} from '../models/contacto'


@Injectable({
    providedIn:'root'
})
export class ContactosService{

  
    getAll(){
        let contactosList:Array<Contacto> = [];

        contactosList = JSON.parse(localStorage.getItem('Contactos'));
        

        return contactosList || []; 
    }
    save(contacto:Contacto){
        
        let lista = this.getAll();

        lista.push(contacto);

        localStorage.setItem('Contactos',JSON.stringify(lista));

        return contacto;

    }
    update(contacto:Contacto,index:number){
        let lista = this.getAll();
        


        lista.splice(index,1,contacto);

        localStorage.setItem('Contactos',JSON.stringify(lista));

        return contacto;
    }
    delete(index:number){
        let lista = this.getAll();
       
        lista.splice(index,1);

        localStorage.setItem('Contactos',JSON.stringify(lista));

        
    }
    
}