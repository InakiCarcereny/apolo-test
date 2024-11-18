"use client";

interface CharacterContextType {
  characters: Character[];
  loading: boolean;
  error: unknown | null | Error;
}

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { charactersAdapter } from "../adapter";
import { Character } from "../models";

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
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null | Error>(null);

  useEffect(() => {
    async function getCharacters() {
      setLoading(true);
      try {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        loading,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
