export interface PokemonListItem {
      name: string;
      sprite: string;
      detailsUrl: string;
}

export interface PokemonDetails {
      name: string;
      sprite: string;
      type: string[]
      abilities: string[]

      //extra
      height: number
      weight: number
      stats: {
            name: string;
            baseStat: number;
      }[];
}