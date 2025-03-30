import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListItem } from '../../../../core/pokedev.model';

@Component({
  selector: 'app-pokemon-list-item',
  imports: [CommonModule],
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.css'
})
export class PokemonListItemComponent {
  @Input() pokemon!: PokemonListItem;
  imageError = false;

  onImageError() {
    this.imageError = true;
    console.warn(`Imposible to load the image of ${this.pokemon.name}`);
  }
}
