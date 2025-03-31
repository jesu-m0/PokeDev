import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { PokeDevService } from './pokedev.service';
import { PokemonListItem } from './pokedev.model';
import { provideHttpClient } from '@angular/common/http';

describe('PokeDevService', () => {

      let service: PokeDevService;
      let http: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  providers: [
                        provideHttpClient(),
                        provideHttpClientTesting(), 
                        PokeDevService
                  ]
            });

            service = TestBed.inject(PokeDevService);
            http = TestBed.inject(HttpTestingController);
      });

      it('Get list API success: should get from API and transform Pokémon list', () => {

            const mockApiResponse = {
                  count: 2,
                  results: [
                        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
                  ]
            };

            service.getPokemonList(2, 0).subscribe({
                  next: (pokemons: PokemonListItem[]) => {
                        expect(pokemons.length).toBe(2); // Check total items returned
                        expect(pokemons[0].name).toBe('bulbasaur');
                        expect(pokemons[0].id).toBe('1'); // Check ID extracted from URL
                  }
            });

            const req = http.expectOne('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0');
            expect(req.request.method).toBe('GET');
            req.flush(mockApiResponse);
      });

      it('Get list API fails: should handle error when fetching list', () => {

            service.getPokemonList().subscribe({
                  next: () => fail('Testing methon in case API fails'),
                  error: (err: Error) => {
                        expect(err.message).toContain('Error loading Pokemon list');
                  }
            });

            const req = http.expectOne('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
            req.error(new ProgressEvent('error')); //when we get no answer from api navigator throws this 
      });
});
