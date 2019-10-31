import {IContacto} from '../interfaces/IContacto'


export class Contacto implements IContacto{
    public nombre: string;

    public numero:string;

    public tipoContacto:number;

    
    

    
    constructor(numero?:string,nombre?:string,tipoContacto?:number) {
        
        this.numero=numero;
        this.nombre=nombre;
        this.tipoContacto=tipoContacto;
    }

    clean(){
        this.numero='';
        this.tipoContacto=0;
    }
}