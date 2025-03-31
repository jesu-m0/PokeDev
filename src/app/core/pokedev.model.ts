export interface PokemonListItem {
      id: string;
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

export const PokemonTypeStyles: Record<string, { bg: string; text: string }> = {
      water: { bg: '#2D43FA', text: '#FFFFFF' },
      grass: { bg: '#0FFA4D', text: '#000000' },
      fire: { bg: '#FA4147', text: '#FFFFFF' },
      normal: { bg: '#FAD141', text: '#000000' },
      ground: { bg: '#E0C068', text: '#000000' },
      fighting: { bg: '#FA6941', text: '#FFFFFF' },
      flying: { bg: '#C1D7FF', text: '#000000' },
      poison: { bg: '#8A1EA8', text: '#FFFFFF' },
      rock: { bg: '#9E9783', text: '#FFFFFF' },
      bug: { bg: '#8CC25F', text: '#000000' },
      ghost: { bg: '#D9D9D9', text: '#000000' },
      steel: { bg: '#536772', text: '#FFFFFF' },
      electric: { bg: '#FFFF00', text: '#000000' },
      psychic: { bg: '#FFC2FB', text: '#000000' },
      ice: { bg: '#C1FFFF', text: '#000000' },
      dragon: { bg: '#FF5877', text: '#FFFFFF' },
      dark: { bg: '#00158A', text: '#FFFFFF' },
      fairy: { bg: '#FFCE53', text: '#000000' },
      unknown: { bg: '#D9D9D9', text: '#000000' },
      shadow: { bg: '#5C5C5C', text: '#FFFFFF' },
};
