const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export type PokeApiResType = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokeType[],
};

export type PokeType = {
    name: string;
    url: string;
    weight: number;
}

export const getPokeList = async (limit: number, offset: number) => {
    // const res = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    // const data: PokeApiResType = await res.json() as PokeApiResType;

    /* const mappedData: PokeType[] = data.map(el => ({
        name: el.results[0].name,
        url: el.results[0].url,
    })); */
    
    // return data;

    const api = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    const data = await api.json();
    const promises = await data.results.map(async (pokemon: any) => {
      const result = await fetch(pokemon.url);
      const res = await result.json();
      return res;
    });

    const results = await Promise.all(promises);
    return results;

}

export const getPokeDetail = async () => {
    const res = 0;
}