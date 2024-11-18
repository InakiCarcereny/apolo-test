import { Cross } from "@/app/icons";
import { Trash } from "@/app/icons";
import { useFavoritesStore } from "@/app/store/favorites-store";
import { useModalStore } from "@/app/store/modal-store";

export function Favorites() {
  const { closeModal } = useModalStore();

  const { favorites, removeFavorite, clearFavorites } = useFavoritesStore();

  return (
    <aside className="fixed top-0 right-0 w-[350px] h-screen bg-white border-l border-gray-200 px-4 py-4 flex flex-col gap-4">
      <header className="w-full flex items-center justify-between">
        <h3 className="font-semibold text-zinc-600 text-lg">Favorites</h3>
        <button>
          <Cross
            onClick={closeModal}
            className="w-7 h-7 text-gray-500 hover:text-orange-400 duration-200"
          />
        </button>
      </header>

      <section>
        <ul className="flex flex-col gap-1 w-full">
          {favorites.map((favorite) => (
            <li
              key={favorite.id}
              className="flex items-center justify-between w-full px-2 py-2 hover:bg-zinc-100 rounded-[6px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={favorite.image}
                  alt="product image"
                  className="w-14 h-14 rounded-[4px]"
                />

                <h4 className="text-lg font-semibold text-zinc-600">
                  {favorite.name}
                </h4>
              </div>

              <button onClick={() => removeFavorite(favorite)}>
                <Trash className="w-6 h-6 text-red-400" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {favorites.length > 0 && (
        <button
          onClick={clearFavorites}
          className="w-full px-4 py-2 text-center text-sm font-semibold bg-orange-400 rounded-[6px] text-white"
        >
          Clear
        </button>
      )}
    </aside>
  );
}
