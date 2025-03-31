import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonTypeStyles } from '../../../../core/pokedev.model';

@Component({
      selector: 'app-stat-card',
      imports: [CommonModule],
      templateUrl: './stat-card.component.html',
      styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
      @Input() stat: string = '';
      @Input() bgColor: string = '';

      getBgColor(type: string): string {
            return PokemonTypeStyles[type.toLowerCase()]?.bg || '#FFFFFF';
      }

      getTextColor(type: string): string {
            return PokemonTypeStyles[type.toLowerCase()]?.text || '#000000';
      }
}
