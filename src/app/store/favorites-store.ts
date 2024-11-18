import { create } from "zustand";
import { CharacterProps } from "../models";

interface FavoritesStore {
  favorites: CharacterProps[];
  addFavorite: (character: CharacterProps) => void;
  removeFavorite: (character: CharacterProps) => void;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  addFavorite: (character: CharacterProps) => {
    set((state) => ({
      favorites: [...state.favorites, character],
    }));
  },
  removeFavorite: (character: CharacterProps) => {
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== character.id),
    }));
  },
  clearFavorites: () => {
    set(() => ({
      favorites: [],
    }));
  },
}));
