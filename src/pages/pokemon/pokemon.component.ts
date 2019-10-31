import { OnInit,Component } from '@angular/core'
import{ pokemonService } from '../../services/pokemon.service'
import { PokemonModel } from '../../models/pokemon';
declare var $:any;
@Component({
    templateUrl:'./pokemon.component.html',
    selector:'pokemon',
})
export class Pokemon implements OnInit{
    

    pokemonList:Array<PokemonModel>=[];
    

    infoPokemon:PokemonModel = new PokemonModel();

    constructor(private pokemonService:pokemonService) {
        
        
    }

    ngOnInit(): void {
        
        this.getListaPokemon();
        
    }

    async getListaPokemon(){
        let res = await this.pokemonService.getPokemonesList() as unknown  ;
        
        
        this.pokemonList= res as Array<PokemonModel> || [];

        
    }

    async seeDetails(url){
        this.infoPokemon = await this.pokemonService.seePokemon(url);
        
    }
    cleanInfo(){
        this.infoPokemon=null;
        
        $('#exampleModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
}