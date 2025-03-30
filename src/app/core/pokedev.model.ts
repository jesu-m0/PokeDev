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

export enum PokemonTypeEnum {
      NORMAL = 'normal',
      FIGHTING = 'fighting',
      FLYING = 'flying',
      POISON = 'poison',
      GROUND = 'ground',
      ROCK = 'rock',
      BUG = 'bug',
      GHOST = 'ghost',
      STEEL = 'steel',
      FIRE = 'fire',
      WATER = 'water',
      GRASS = 'grass',
      ELECTRIC = 'electric',
      PSYCHIC = 'psychic',
      ICE = 'ice',
      DRAGON = 'dragon',
      DARK = 'dark',
      FAIRY = 'fairy',
      UNKNOWN = 'unknown',
      SHADOW = 'shadow'
}
    