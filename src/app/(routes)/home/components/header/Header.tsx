"use client";

import { HeartFill } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";
import { Favorites } from "../favorites";
import { useFavoritesStore } from "@/app/store/favorites-store";
import { useLocalStorage } from "@/app/hooks";

export function Header() {
  const { isOpen, openModal } = useModalStore();

  const { favorites } = useFavoritesStore();

  const { storedValue } = useLocalStorage("user", {});

  const user = storedValue.username;

  return (
    <>
      <header className="w-full h-[150px] bg-gradient-to-t from-zinc-100 to-white px-16 flex items-center justify-between border-b border-gray-200 shadow-lg">
        <h1 className="flex flex-col gap-1 text-zinc-600 text-2xl font-semibold">
          Welcome back to our
          <span
            className="pl-20 text-6xl text-cyan-500"
            style={{ WebkitTextStroke: "1px #22c55e" }}
          >
            Universe
          </span>
        </h1>

        <div className="flex items-center gap-4">
          <p className="text-zinc-600 font-semibold text-lg">
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

      {isOpen && <Favorites />}
    </>
  );
}
