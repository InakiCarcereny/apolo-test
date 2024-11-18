"use client";

import { Input, Redirect, SubmitButton } from "@/app/components";

import { useForm } from "react-hook-form";

import { FormProps } from "@/app/models";

import { useLocalStorage } from "@/app/hooks";

export function RegisterForm() {
  const { setValue } = useLocalStorage("user", {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit = handleSubmit((data) => {
    setValue(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <Input
        label="Email"
        id="email"
        register={register}
        type="email"
        error={errors?.email?.message}
        regex={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
      />

      <Input
        label="Username"
        id="username"
        register={register}
        type="text"
        error={errors?.username?.message}
        regex={/^[a-zA-Z0-9]+$/}
      />

      <Input
        label="Password"
        id="password"
        register={register}
        type="password"
        error={errors?.password?.message}
        regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
      />

      <SubmitButton />

      <Redirect value="login" />
    </form>
  );
}
