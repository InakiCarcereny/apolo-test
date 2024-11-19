"use client";

import { Input, SubmitButton } from "@/app/components";
import { Cross, UploadImage } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";

import { useForm } from "react-hook-form";

import { Character } from "@/app/models";
import { useCharacter } from "@/app/context/character";
import { useCreateObjectURL } from "@/app/hooks";

export function CreateCharacterModal() {
  const { closeModal } = useModalStore();

  const { createCharacter } = useCharacter();

  const {
    register,
    handleSubmit,
    watch,
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
    closeModal();
  });

  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-black/50">
      <form
        onSubmit={onSubmit}
        className="bg-white w-[500px] min-h-[450px] rounded-[4px] mx-4 md:mx-0 px-4 py-4 flex flex-col gap-4"
      >
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

        <Input
          label="Name"
          type="text"
          id="name"
          register={register}
          error={errors.name?.message}
        />

        <div className="flex items-center gap-4 md:gap-0 justify-between">
          <Input
            label="Status"
            type="text"
            id="status"
            register={register}
            error={errors.status?.message}
          />
          <Input
            label="Species"
            type="text"
            id="species"
            register={register}
            error={errors.species?.message}
          />
        </div>

        <Input
          label="Origin"
          type="text"
          id="origin"
          register={register}
          error={errors.origin?.message}
        />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label
              htmlFor="image"
              className="text-gray-600 text-sm font-semibold"
            >
              image
            </label>
            {errors.image && (
              <p className="text-red-600 text-sm">* {errors.image.message}</p>
            )}
          </div>
          <div className="w-full h-[250px] bg-zinc-100 flex flex-col items-center justify-center relative overflow-hidden">
            <input
              type="file"
              {...register("image", {
                required: "Image is required",
              })}
              id="image"
              className="w-full h-full opacity-0"
            />
            <span className="absolute">
              <UploadImage className="text-zinc-300 w-12 h-12 rounded-[4px]" />
            </span>
            {imagePreview && (
              <img
                src={imagePreview}
                alt=""
                className="absolute w-full h-full rounded-[4px]"
              />
            )}
          </div>
        </div>

        <SubmitButton label="Create Character" />
      </form>
    </div>
  );
}
