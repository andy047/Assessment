import { Injectable } from '@angular/core'
import {Observable} from 'rxjs';
import {PokemonModel} from '../models/pokemon'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class pokemonService{
    private apiUrl:string = 'https://pokeapi.co/api/v2/pokemon';

    /**
     *
     */
    constructor(private http:HttpClient) {
        
        
    }
    async getPokemonesList():Promise<Array<PokemonModel>>{
        let res: Array<PokemonModel> = [];
        await fetch(this.apiUrl)
            .then((response) => {
                
                return response.json()
            })
            .then((data) => {
                debugger;
                res = data.results.map(x=>{
                    let obj = new PokemonModel(
                        x.name,
                        x.url
                    )
                    return obj;
                });
                //console.log(JSON.stringify(data))
                
                
            })
        
        
        return res;
    }
    

    async seePokemon(url:string):Promise<PokemonModel>{
        let res: PokemonModel = new PokemonModel();
        await fetch(url)
            .then((response) => {
                
                return response.json()
            })
            .then((data) => {
                debugger;
                
                res = new PokemonModel(
                    data.name,
                    null,
                    data.height,
                    data.weight,
                    data.sprites.front_default,
                    data.abilities.map(x=>x.ability.name)
                )
                //console.log(JSON.stringify(data))
                
                
            })
        
        
        return res;
    }
}