"use client";

import { useCharacter } from "@/app/context/character";
import { Character } from "../character/Character";
import { Loading } from "../loading";

export function CharacterList() {
  const { characters, loading } = useCharacter();

  if (loading) {
    return <Loading />;
  }

  return (
    <ul className="grid grid-cols-4 gap-6">
      {characters.map((character) => (
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
