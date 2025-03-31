import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonDetails } from '../../core/pokedev.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StatCardComponent } from './components/stat-card/stat-card.component';

@Component({
      selector: 'app-details-page',
      imports: [CommonModule, StatCardComponent, RouterLink],
      templateUrl: './details-page.component.html',
      styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit {

      pokemon!: PokemonDetails;

      imageError = false;

      constructor(
            private route: ActivatedRoute,
            private pokedevService: PokeDevService
      ) { }

      ngOnInit(): void {
            // Get the ID from the route parameters
            const id = this.route.snapshot.paramMap.get('id') as string;

            this.pokedevService.getPokemonDetails(id).subscribe({
                  next: (pokemon) => {
                        this.pokemon = pokemon;
                  },
                  error: (err) => {
                        console.error('Error loading pokemon details:', err);
                  }
            });
      }

      onImageError(): void {
            this.imageError = true;
            console.warn(`Imposible to load the image of ${this.pokemon.name}`);
      }
}
