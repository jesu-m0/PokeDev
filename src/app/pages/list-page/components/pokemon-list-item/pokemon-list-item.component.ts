import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListItem } from '../../../../core/pokedev.model';
import { Router } from '@angular/router';

@Component({
      selector: 'app-pokemon-list-item',
      imports: [CommonModule],
      templateUrl: './pokemon-list-item.component.html',
      styleUrl: './pokemon-list-item.component.css'
})
export class PokemonListItemComponent {
      @Input() pokemon!: PokemonListItem;
      imageError: Boolean = false;

      constructor(private router: Router) { }

      onImageError(): void {
            this.imageError = true;
            console.warn(`Imposible to load the image of ${this.pokemon.name}`);
      }

      navigateToDetails(): void {
            this.router.navigate(['/details', this.pokemon.id]);
      }
}
