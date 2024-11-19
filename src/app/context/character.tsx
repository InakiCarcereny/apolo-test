"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { charactersAdapter } from "../adapter";
import { Character, Origin } from "../models";

interface CharacterContextType {
  characters: Character[];
  loading: boolean;
  error: unknown | null | Error;
  createCharacter: (character: Character) => void;
  updateCharacter: (character: Character) => void;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export function useCharacter() {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }

  return context;
}

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null | Error>(null);

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        const res = await charactersAdapter();
        setCharacters(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getCharacters();
  }, []);

  const createCharacter = (
    character: Omit<Character, "id" | "image" | "origin"> & {
      image: FileList | string;
      origin: string | Origin;
    }
  ) => {
    const imageFile = (character.image as FileList)?.[0];
    const imageUrl = imageFile
      ? URL.createObjectURL(imageFile)
      : (character.image as string);

    setCharacters([
      ...characters,
      {
        id: characters.length + 1,
        origin:
          typeof character.origin === "string"
            ? { name: character.origin, url: "" }
            : character.origin,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type || "",
        gender: character.gender || "",
        location: character.location || { name: "", url: "" },
        image: imageUrl,
        episode: character.episode || [],
        url: character.url || "",
        created: character.created || "",
      },
    ]);
  };

  const updateCharacter = (
    character: Omit<Character, "image" | "origin"> & {
      image: FileList | string;
      origin: string | Origin;
    }
  ) => {
    const imageFile = (character.image as FileList)?.[0];
    const imageUrl = imageFile
      ? URL.createObjectURL(imageFile)
      : (character.image as string);

    setCharacters(
      characters.map((c) =>
        c.id === character.id
          ? {
              ...c,
              name: character.name,
              origin:
                typeof character.origin === "string"
                  ? { name: character.origin, url: c.origin.url || "" }
                  : character.origin,
              species: character.species,
              status: character.status,
              type: character.type || c.type,
              gender: character.gender || c.gender,
              location: character.location || c.location,
              image: imageUrl,
              episode: character.episode || c.episode,
              url: character.url || c.url,
              created: character.created || c.created,
            }
          : c
      )
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        loading,
        error,
        createCharacter,
        updateCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
