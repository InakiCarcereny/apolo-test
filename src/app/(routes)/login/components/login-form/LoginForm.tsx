"use client";

import { Input, Redirect, SubmitButton } from "@/app/components";

import { FormProps } from "@/app/models";

import { useLocalStorage } from "@/app/hooks";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const { storedValue } = useLocalStorage("user", {});

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit = handleSubmit((data) => {
    if (
      storedValue.username === data.username &&
      storedValue.password === data.password
    ) {
      router.push("/home");
    } else {
      setError("Invalid username or password");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <Input
        label="Username"
        id="username"
        register={register}
        type="text"
        error={errors?.username?.message}
      />

      <Input
        label="Password"
        id="password"
        register={register}
        type="password"
        error={errors?.password?.message}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <SubmitButton label="Log in" />

      <Redirect value="register" />
    </form>
  );
}
