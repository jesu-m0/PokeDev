import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonDetails } from '../../core/pokedev.model';
import { ActivatedRoute } from '@angular/router';

@Component({
      selector: 'app-details-page',
      imports: [CommonModule],
      templateUrl: './details-page.component.html',
      styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit {

      pokemon: PokemonDetails | null = null;

      constructor(
            private route: ActivatedRoute,
            private pokedevService: PokeDevService
      ) { }

      ngOnInit(): void {
            // Get the ID from the route parameters
            const id = this.route.snapshot.paramMap.get('id') as string;

           this.pokedevService.getPokemonDetails(id).subscribe({
                              next: (pokemon) => {
                                    console.log(pokemon);
                                    
                                    this.pokemon = pokemon;
                              },
                              error: (err) => {
                                    console.error('Error loading pokemon details:', err);
                              }
            });
      }
}
