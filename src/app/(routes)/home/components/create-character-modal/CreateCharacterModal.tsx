import { Input, SubmitButton } from "@/app/components";
import { Cross } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";

import { useForm } from "react-hook-form";

export function CreateCharacterModal() {
  const { closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-black/50">
      <form className="bg-white w-[500px] min-h-[450px] rounded-[4px] px-4 py-4 flex flex-col gap-4">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-lg text-zinc-600 font-semibold">
            Create Character
          </h1>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-500 hover:text-orange-400 duration-200"
          >
            <Cross className="w-7 h-7" />
          </button>
        </header>

        <Input label="Name" type="text" id="name" register={register} />
        <Input label="Species" type="text" id="species" register={register} />
        <Input label="Origin" type="text" id="origin" register={register} />
        <Input label="Status" type="text" id="status" register={register} />

        <SubmitButton />
      </form>
    </div>
  );
}
