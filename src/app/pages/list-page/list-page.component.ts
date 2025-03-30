import { Component, OnInit } from '@angular/core';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonListItem } from '../../core/pokedev.model';
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

      constructor(private pokeService: PokeDevService) {}

      ngOnInit(): void {

            this.pokeService.getPokemonList().subscribe({
                  next: (pokemons: PokemonListItem[]) => {
                        this.pokemons = pokemons;
                  },
                  error: (err) => {
                        console.error("Error while getting pokemon list: ", err);
                  }
            })

      }

}
