interface SubmitButtonProps {
  label: string;
}

export function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-orange-400 text-white px-4 py-2 rounded-[4px] font-semibold text-sm flex items-center justify-center"
    >
      {label}
    </button>
  );
}
