import { Component, OnInit } from '@angular/core';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonDetails, PokemonListItem } from '../../core/pokedev.model';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
      selector: 'app-list-page',
      imports: [CommonModule, PokemonListItemComponent, SearchBarComponent],
      templateUrl: './list-page.component.html',
      styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

      allPokemons: PokemonListItem[] = [];
      filteredPokemons: PokemonListItem[] = [];
      paginatedPokemons: PokemonListItem[] = []; //pokemons in the actual page
      pageSize = 20;
      offset = 0;

      errorMessage = '';

      pokemonCount: number = 0; //Calculated from filteredPokemons.size

      searchedPokemon: string = '';

      constructor(private pokedevService: PokeDevService) { }

      ngOnInit(): void {

            //Load all pokemons
            this.pokedevService.getPokemonList(100000, 0).subscribe({
                  next: (pokemons) => {
                        this.allPokemons = pokemons;
                        this.filteredPokemons = this.allPokemons;  // At the beginning we show all the pokemomns
                        this.pokemonCount = this.filteredPokemons.length;
                        this.applyPagination();
                  },
                  error: (err) => {
                        console.error("Error while getting pokemon list: ", err);
                        this.errorMessage = err;
                  }
            });

      }

      filterBysearchedPokemon(searchTerm: string): void{
            this.searchedPokemon = searchTerm.toLowerCase();
            this.filteredPokemons = this.allPokemons.filter (pokemon => 
                  pokemon.name.toLowerCase().includes(this.searchedPokemon)
            );
            this.offset = 0;
            this.applyPagination();
            this.pokemonCount = this.filteredPokemons.length;
      }

      applyPagination(): void {
            this.paginatedPokemons = this.filteredPokemons.slice(this.offset, this.offset + this.pageSize);
      }

      nextPage(): void {

            if (this.offset + this.pageSize < this.pokemonCount) { //last page?
                  this.offset += this.pageSize;
                  this.applyPagination();
            }

      }

      previousPage(): void {
            if (this.offset >= this.pageSize) { //first page?
                  this.offset -= this.pageSize;
                  this.applyPagination();
            }
      }

      endIndex(): number {
            return this.offset + 20 > this.pokemonCount ? this.pokemonCount : this.offset + 20;
      }

}
