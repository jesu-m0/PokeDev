import { Component, OnInit } from '@angular/core';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonDetails, PokemonListItem } from '../../core/pokedev.model';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page',
  imports: [CommonModule, PokemonListItemComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

      pokemons: PokemonListItem[] = [];

      pokemonCount: number = 0;

      offset: number = 0;

      constructor(private pokeService: PokeDevService) {}

      ngOnInit(): void {
            //Get pokemon list
            this.updatePokemonList();

            //Get pokemon count
            this.pokeService.getPokemonCount().subscribe({
                  next: (count: number) => {
                        this.pokemonCount = count;
                  },
                  error: (err) => {
                        console.error("Error while fetching pokemon count: ", err); 
                  }
            })
      }

      nextPage(): void{
            
            if(this.offset+20<this.pokemonCount){ //Are we in the last page?
                  console.log("nest");
                  
                  this.offset +=20;
                  this.updatePokemonList();
            }
      }

      previousPage(): void{
            if(this.offset-20>=0){ //Are we in the first page?
                  this.offset-=20;
                  this.updatePokemonList();
            }
      }

      updatePokemonList(){

            this.pokeService.getPokemonList(20,this.offset).subscribe({ //Get the list of 20 pokemons
                  next: (pokemons: PokemonListItem[]) => {
                        this.pokemons = pokemons;
                  },
                  error: (err) => {
                        console.error("Error while getting pokemon list: ", err);
                  }
            })
      }

      endIndex(): number{
            return this.offset+20>this.pokemonCount? this.pokemonCount : this.offset+20;
      }

}
