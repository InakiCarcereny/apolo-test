"use client";

import { Input, SubmitButton } from "@/app/components";
import { useCharacter } from "@/app/context/character";
import { useCreateObjectURL } from "@/app/hooks";
import { Dot, Earth, Galaxy, UploadImage } from "@/app/icons";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Character } from "@/app/models";

import { useRouter } from "next/navigation";

export function EditCharacter({ characterId }: { characterId: string }) {
  const { characters, updateCharacter } = useCharacter();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Character>();

  const findCharacter = characters.find(
    (character) => character.id.toString() === characterId
  );

  useEffect(() => {
    if (findCharacter) {
      setValue("name", findCharacter?.name);
      setValue("species", findCharacter?.species);
      setValue("status", findCharacter?.status);
      setValue("origin", findCharacter?.origin.name);
      setValue("id", findCharacter.id);
    }
  }, [findCharacter, setValue]);

  const imageFilelist = watch("image");

  const imageFile = imageFilelist?.[0] || null;

  const imagePreview = useCreateObjectURL(imageFile);

  const onSubmit = handleSubmit((data) => {
    const processData = {
      ...data,
      image: data.image,
      id: data.id,
    };
    updateCharacter(processData);
    router.push("/home");
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-100">
      <div className="flex flex-col md:flex-row gap-10 h-full py-4 md:py-10">
        <div className="bg-white max-w-[500px] min-h-full rounded-[4px] shadow-lg px-4 py-4 flex flex-col gap-4">
          <header className="w-full">
            <h1 className="text-lg text-zinc-600 font-semibold">
              Edit Character
            </h1>
          </header>

          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-between h-full"
          >
            <div className="flex flex-col gap-4">
              <Input
                label="Name"
                id="name"
                register={register}
                type="text"
                error={errors.name?.message}
              />

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="image"
                  className="text-gray-600 text-sm font-semibold"
                >
                  image
                </label>
                <div className="w-full h-[250px] bg-zinc-100 flex flex-col items-center justify-center relative overflow-hidden">
                  <input
                    type="file"
                    {...register("image")}
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

              <Input
                label="Status"
                id="status"
                register={register}
                type="text"
                error={errors.status?.message}
              />

              <Input
                label="Species"
                id="species"
                register={register}
                type="text"
                error={errors.species?.message}
              />

              <Input
                label="Origin"
                id="origin"
                register={register}
                type="text"
                error={errors.origin?.message}
              />
            </div>

            <div>
              <SubmitButton label="Save" />
            </div>
          </form>
        </div>

        <div className="bg-white w-[250px] h-[425px] rounded-[4px] shadow-lg px-4 py-4 flex flex-col justify-between">
          <section className="flex flex-col gap-1">
            <header className="w-full">
              <h3 className="font-semibold text-zinc-600 truncate">
                {watch("name")}
              </h3>
            </header>

            <div className="w-full h-[250px] bg-zinc-100 flex flex-col items-center justify-center relative overflow-hidden rounded-[4px]">
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

            <span className="text-sm text-zinc-600 font-medium flex items-center gap-2 truncate">
              {watch("status") === "Alive" ? (
                <>
                  <Dot className="w-5 h-5 text-green-500" />
                  {watch("status")} - {watch("species")}
                </>
              ) : (
                <>
                  <Dot className="w-5 h-5 text-red-500" />
                  {watch("status")} - {watch("species")}
                </>
              )}
            </span>

            <span className="text-sm text-zinc-600 font-medium flex gap-2 truncate">
              {watch("origin") !== "unknown" ? (
                <>
                  <Earth className="w-5 h-5 text-cyan-700" />
                  Origin - {watch("origin")}
                </>
              ) : (
                <>
                  <Galaxy className="w-5 h-5 text-cyan-700" />
                  Origin - {watch("origin")}
                </>
              )}
            </span>
          </section>

          <button
            type="button"
            className="w-full bg-orange-400 text-white px-4 py-2 rounded-[4px] font-semibold text-sm flex items-center justify-center mt-4 md:mt-0"
          >
            Character preview
          </button>
        </div>
      </div>
    </div>
  );
}
