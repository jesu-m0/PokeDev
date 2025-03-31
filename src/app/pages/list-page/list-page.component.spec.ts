import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { PokeDevService } from '../../core/pokedev.service';
import { PokemonListItem } from '../../core/pokedev.model';
import { of } from 'rxjs';

describe('ListPageComponent', () => {
      let component: ListPageComponent;
      let fixture: ComponentFixture<ListPageComponent>;
      let pokeServiceSpy: jasmine.SpyObj<PokeDevService>;

      const mockPokemons: PokemonListItem[] = [
            { id: '1', name: 'bulbasaur', sprite: '', detailsUrl: '' },
            { id: '2', name: 'ivysaur', sprite: '', detailsUrl: '' }
      ];

      beforeEach(async () => {

            const spy = jasmine.createSpyObj('PokeDevService', ['getPokemonList']);

            await TestBed.configureTestingModule({
                  imports: [ListPageComponent],
                  providers: [{ provide: PokeDevService, useValue: spy }]
            }).compileComponents();

            pokeServiceSpy = TestBed.inject(PokeDevService) as jasmine.SpyObj<PokeDevService>;
            pokeServiceSpy.getPokemonList.and.returnValue(of(mockPokemons)) //we set the spy method as to return the observable of mockPokemons

            fixture = TestBed.createComponent(ListPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            
      });

      it('should create component', () => {
            expect(component).toBeTruthy();
      });

      it('Get and handle list from service: should load pokemons and fill lists on init', () => {
            expect(pokeServiceSpy.getPokemonList).toHaveBeenCalledWith(100000, 0);
            expect(component.allPokemons.length).toBe(2);
            expect(component.filteredPokemons.length).toBe(2);
            expect(component.paginatedPokemons.length).toBe(2);
      });

      it('Handle search: should filter pokemons', () => {
            component.allPokemons = [
                  { id: '1', name: 'bulbasaur', sprite: '', detailsUrl: '' },
                  { id: '2', name: 'charmander', sprite: '', detailsUrl: '' }
            ];

            component.filteredPokemons = component.allPokemons;
            component.paginatedPokemons = component.allPokemons;

            component.filterBysearchedPokemon('bulba');

            expect(component.filteredPokemons.length).toBe(1);
            expect(component.filteredPokemons[0].name).toBe('bulbasaur');

            expect(component.paginatedPokemons.length).toBe(1);
            expect(component.paginatedPokemons[0].name).toBe('bulbasaur');
      });
});
