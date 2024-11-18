import Link from "next/link";

interface RedirectProps {
  value: string;
}

export function Redirect({ value }: RedirectProps) {
  return (
    <p className="font-semibold text-xs text-gray-600">
      Dont have an account?
      <Link
        href={`/${value}`}
        className="font-semibold text-orange-400 text-sm"
      >
        {""} Sign Up
      </Link>
    </p>
  );
}
