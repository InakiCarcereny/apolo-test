import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  type: string;
  regex?: RegExp;
  error?: string;
}

export function Input<T extends FieldValues>({
  id,
  label,
  register,
  type,
  regex,
  error,
}: InputProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="font-semibold text-sm text-gray-600">
          {label}
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <input
        type={type}
        id={id}
        className="w-full border border-zinc-200 px-2 py-2 rounded-[4px] focus:outline-none text-gray-600"
        {...register(id, {
          required: `* ${label} is required`,
          ...(regex && {
            pattern: {
              value: regex,
              message: `* ${label} is invalid`,
            },
          }),
        })}
      />
    </div>
  );
}
