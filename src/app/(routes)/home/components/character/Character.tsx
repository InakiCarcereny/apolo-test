import { Dot, Earth, Galaxy, Heart, HeartFill } from "@/app/icons";

import { useFavoritesStore } from "@/app/store/favorites-store";

import { CharacterProps } from "@/app/models";

export function Character({
  id,
  name,
  status,
  species,
  origin,
  image,
}: CharacterProps) {
  const { addFavorite, favorites, removeFavorite } = useFavoritesStore();

  const isCharacterOnFavorites = favorites.some(
    (favorite) => favorite.id === id
  );

  return (
    <li className="bg-white w-[250px] min-h-[300px] rounded-[4px] shadow-lg flex flex-col gap-3 px-2 py-2">
      <header className="flex items-center justify-between w-full">
        <h3 className="font-semibold text-zinc-600 truncate">{name}</h3>
        {isCharacterOnFavorites ? (
          <button
            onClick={() =>
              removeFavorite({ name, status, species, image, origin, id })
            }
          >
            <HeartFill className="w-6 h-6 text-orange-400" />
          </button>
        ) : (
          <button
            onClick={() =>
              addFavorite({ name, status, species, image, origin, id })
            }
          >
            <Heart className="w-6 h-6" />
          </button>
        )}
      </header>

      <section className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col gap-2">
          <img
            src={image}
            alt="character image"
            className="w-full h-full rounded-[6px]"
          />

          <span className="text-sm text-zinc-600 font-medium flex items-center gap-2">
            {status === "Alive" ? (
              <>
                <Dot className="w-5 h-5 text-green-500" />
                {status} - {species}
              </>
            ) : (
              <>
                <Dot className="w-5 h-5 text-red-500" />
                {status} - {species}
              </>
            )}
          </span>

          <span className="text-sm text-zinc-600 font-medium flex gap-2">
            {origin.name !== "unknown" ? (
              <>
                <Earth className="w-5 h-5 text-cyan-700" />
                Origin - {origin.name}
              </>
            ) : (
              <>
                <Galaxy className="w-5 h-5 text-cyan-700" />
                Origin - {origin.name}
              </>
            )}
          </span>
        </div>

        <button className="w-full bg-orange-400 text-white px-4 py-2 rounded-[4px] font-semibold text-sm flex items-center justify-center">
          Edit
        </button>
      </section>
    </li>
  );
}
