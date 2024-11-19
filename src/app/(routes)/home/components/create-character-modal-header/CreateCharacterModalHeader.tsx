import { Cross } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";

export function CreateCharacterModalHeader() {
  const { closeModal } = useModalStore();

  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="text-lg text-zinc-600 font-semibold">Create Character</h1>
      <button
        type="button"
        onClick={closeModal}
        className="text-gray-500 hover:text-orange-400 duration-200"
      >
        <Cross className="w-7 h-7" />
      </button>
    </header>
  );
}
