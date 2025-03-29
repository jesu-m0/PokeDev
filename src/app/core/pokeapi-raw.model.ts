export interface PokeapiList {
      results: PokeapiListItem[];
}

export interface PokeapiListItem {
      name: string;
      url: string;
}

export interface PokeapiRawDetails {
      name: string;
      sprites: {
            front_default: string;
      };
      types: { type: { name: string } }[];
      abilities: { ability: { name: string } }[];
      height: number;
      weight: number;
      stats: {
            base_stat: number;
            stat: { name: string };
      }[];
}
