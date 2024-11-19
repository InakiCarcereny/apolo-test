"use client";

import { useCharacter } from "@/app/context/character";
import { Character } from "../character/Character";
import { Loading } from "../loading";
import { Query } from "@/app/models";

export function CharacterList({ query }: Query) {
  const { characters, loading } = useCharacter();

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(query.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCharacters.map((character) => (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
          origin={character.origin}
        />
      ))}
    </ul>
  );
}
