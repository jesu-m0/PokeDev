import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

import { PokeapiList, PokeapiListItem, PokeapiRawDetails } from './pokeapi-raw.model';
import { PokemonListItem, PokemonDetails } from './pokedev.model';

@Injectable({
      providedIn: 'root'
})
export class PokeDevService {
      
      constructor(private http: HttpClient) { }

      baseUrl = "https://pokeapi.co/api/v2/pokemon";


      getPokemonList(limit: number = 20, offset: number = 0): Observable<PokemonListItem[]> {

            const url = `${this.baseUrl}?limit=${limit}&offset=${offset}`;

            return this.http
                  .get<PokeapiList>(url)
                  .pipe(
                        map(data => data.results.map(pokemon => {
                              const id = this.extractIdFromUrl(pokemon.url);
                              return {
                                    id: id,
                                    name: pokemon.name,
                                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                                    detailsUrl: pokemon.url
                              };
                        })),
                        catchError(err => {
                              console.error('Error fetching Pokemon list', err);
                              return throwError(() => new Error('Error loading Pokemon list'));
                        })
                  );
      }

      private extractIdFromUrl(url: string): string { //url: https://pokeapi.co/api/v2/pokemon/1/
            const parts = url.split('/'); //parts: ['https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '1', '']
            return parts[parts.length - 2]; //returns '1' (second to last element)
      }

      getPokemonDetails(id: string): Observable<PokemonDetails> {

            const url = `${this.baseUrl}/${id}`;


            return this.http.get<PokeapiRawDetails>(url)
                  .pipe(
                        map(data => {
                              const weight = Number((data.weight * 0.1).toFixed(2)); // 1 = 0.1kg
                              const height = Number((data.height * 0.1).toFixed(2)); // 1 = 0.1m
                              return {
                                    name: data.name,
                                    sprite: data.sprites.front_default,
                                    type: data.types.map(t => t.type.name),
                                    abilities: data.abilities.map(a => a.ability.name),
                                    height: height,
                                    weight: weight,
                                    stats: data.stats.map(s => ({
                                          name: s.stat.name,
                                          baseStat: s.base_stat
                                    }))
                              }
                        }),
                        catchError(err => {
                              console.error('Error fetching Pokemon details', err);
                              return throwError(() => new Error('Error loading Pokemon details'));
                        })
                  );
      }

      getAllPokemonNames(): Observable<string[]> {

            const url = `${this.baseUrl}?limit=100000&offset=0`;

            return this.http.get<PokeapiList>(url)
                  .pipe(
                        map(data => {
                              return data.results.map((pokemon: PokeapiListItem) => pokemon.name);
                        }),
                        catchError(err => {
                              console.error('Error fetching pokemon names', err);
                              return throwError (() => new Error('Error fetching pokemon names'));                              
                        })
                  );
      }



}
