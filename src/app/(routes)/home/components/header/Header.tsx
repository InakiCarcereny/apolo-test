"use client";

import { HeartFill, Plus, Search } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";
import { Favorites } from "../favorites";
import { useFavoritesStore } from "@/app/store/favorites-store";
import { useLocalStorage } from "@/app/hooks";
import { useEffect, useState } from "react";
import { CreateCharacterModal } from "../create-character-modal";

export function Header() {
  const [user, setUser] = useState(null);

  const { isOpen, openModal, type } = useModalStore();

  const { favorites } = useFavoritesStore();

  const { storedValue } = useLocalStorage("user", {});

  useEffect(() => {
    setUser(storedValue.username);
  }, [storedValue]);

  return (
    <>
      <header className="w-full h-[150px] bg-gradient-to-t from-zinc-100 to-white px-10 py-7 flex items-center justify-between border-b border-gray-200 shadow-lg">
        <h1 className="flex flex-col gap-2 text-zinc-600 text-2xl font-semibold">
          Welcome back to our
          <span
            className="pl-20 text-6xl text-cyan-500"
            style={{ WebkitTextStroke: "1px #22c55e" }}
          >
            Universe
          </span>
        </h1>

        <div className="flex items-center gap-4 w-[650px]">
          <div className="rounded-full w-full flex items-center justify-between bg-orange-100 px-4 py-2">
            <input
              type="search"
              className="bg-transparent placeholder:text-orange-400 placeholder:font-semibold placeholder:text-sm w-full focus:outline-none"
              placeholder="Search..."
            />
            <Search className="w-6 h-6 text-orange-400" />
          </div>

          <button
            onClick={() => openModal("create-character")}
            className="rounded-full px-2 py-2 bg-orange-100 flex items-center justify-center text-orange-400"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-zinc-600 font-semibold text-sm">
            We are so happy to see you again{" "}
            <span className="text-orange-400" suppressHydrationWarning>
              {user}
            </span>
            <span className="text-orange-400">!</span>
          </p>

          <button
            onClick={() => openModal("favorites")}
            className="rounded-full px-2 py-2 bg-orange-100 flex items-center gap-2 justify-center text-orange-400"
          >
            <HeartFill className="w-6 h-6" />
            {favorites.length}
          </button>
        </div>
      </header>

      {isOpen && type === "create-character" && <CreateCharacterModal />}
      {isOpen && type === "favorites" && <Favorites />}
    </>
  );
}
