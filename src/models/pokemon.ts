
export class PokemonModel{
    nombre:string;
    url:string;
    altura:number;
    peso:number;
    foto:string;
    habilidades:Array<string>;

  
    constructor(nombre?:string,url?:string,altura?:number,peso?:number,foto?:string,habilidades?:Array<string>) {
        
        this.nombre=nombre;
        this.url=url;
        this.altura=altura;
        this.peso =peso;
        this.foto = foto;
        this.habilidades = habilidades || [];
    }
}