"use client";

import { Input, SubmitButton } from "@/app/components";
import { Cross } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";

import { useForm } from "react-hook-form";

import { Character } from "@/app/models";
import { useCharacter } from "@/app/context/character";
import { useCreateObjectURL } from "@/app/hooks";
import { useEffect } from "react";

export function EditCharacterModal() {
  const { closeModal } = useModalStore();

  const { createCharacter } = useCharacter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Character>();

  const imageFilelist = watch("image");

  const imageFile = imageFilelist?.[0] || null;

  const imagePreview = useCreateObjectURL(imageFile);

  const onSubmit = handleSubmit((data) => {
    const processData = {
      ...data,
      image: data.image,
    };
    createCharacter(processData);
  });

  useEffect(() => {
    setValue("name", findCharacter?.name);
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-black/50">
      <form
        onSubmit={onSubmit}
        className="bg-white w-[500px] min-h-[450px] rounded-[4px] px-4 py-4 flex flex-col gap-4"
      >
        <header className="flex items-center justify-between w-full">
          <h1 className="text-lg text-zinc-600 font-semibold">
            Edit Character
          </h1>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-500 hover:text-orange-400 duration-200"
          >
            <Cross className="w-7 h-7" />
          </button>
        </header>

        <Input
          label="Name"
          type="text"
          id="name"
          register={register}
          error={errors.name?.message}
        />
        <Input
          label="Species"
          type="text"
          id="species"
          register={register}
          error={errors.species?.message}
        />

        <label htmlFor="image">image</label>
        <input type="file" {...register("image")} id="image" />

        <img src={imagePreview} alt="" />

        <Input
          label="Origin"
          type="text"
          id="origin"
          register={register}
          error={errors.origin?.message}
        />
        <Input
          label="Status"
          type="text"
          id="status"
          register={register}
          error={errors.status?.message}
        />

        <SubmitButton />
      </form>
    </div>
  );
}
