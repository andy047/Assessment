import { OnInit,Component } from '@angular/core'
import {Contacto} from '../../models/contacto'
import {ContactosService} from '../../services/contactos.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl:'./contactos.component.html',
    selector:'Contacto',
})
export class Contactos implements OnInit{
    

    model:Contacto = new Contacto();

    contactosList:Array<Contacto> = [];

    editId:number = null;

    constructor(private contactosService:ContactosService ) {
        
    }

    convert(data){
        debugger;
    }
    ngOnInit(): void {
        this.getContactos();
        
        
    }

    formatText(data){
        console.log(data)
        let input = this.model.numero;
        input = input.replace(/\D/g,'');

        // Trim the remaining input to ten characters, to preserve phone number format
        input = input.substring(0,10);

        // Based upon the length of the string, we add formatting as necessary
        var size = input.length;
        if(size == 0){
                input = input;
        }else if(size < 4){
                input = '('+input;
        }else if(size < 7){
                input = '('+input.substring(0,3)+')'+input.substring(3,6);
        }else{
                input = '('+input.substring(0,3)+')'+input.substring(3,6)+'-'+input.substring(6,10);
        }
        this.model.numero= input; 
    }

    getContactos(){
        
        this.contactosList=this.contactosService.getAll();
    }
    addNew(){
        if(this.model.numero.length>0 && this.isPhoneNumber(this.model.numero) && this.model.nombre.length>0){
            this.contactosService.save(this.model);
            this.getContactos();
            this.cleanModel();

        }else{
            alert('Ingrese un numero de telefono valido..')
        }
    }
    setEditMode(idx:number){
        this.editId=idx;
        this.model.nombre = this.contactosList[idx].nombre;
        this.model.numero = this.contactosList[idx].numero;
    }
    update(){
        
        this.contactosService.update(this.model,this.editId);
        this.cleanModel();
        this.getContactos();
    }
    cleanModel(){
        this.model.numero='';
        this.model.nombre='';
        //this.model.tipoContacto=0;
        this.editId=null;
    }

    delete(index:number){
        this.contactosService.delete(index);

        this.getContactos()
    }

    private isPhoneNumber(phone:string) {
        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(phone.match(phoneno)) {
            return true;//valid
        }  
        else {  
          
          return false; //invalid
        }
      }
}