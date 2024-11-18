import { Character } from "../models";
import { getCharactersRequest } from "../services";

export async function charactersAdapter() {
  try {
    const res = await getCharactersRequest();

    console.log(res);

    const characters = res.data.results;

    return characters.map((character: Character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    }));
  } catch (err) {
    console.error(err);
  }
}
