import { ClipLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex flex-col gap-2 font-semibold items-center justify-center text-zinc-600 w-full h-full">
      <ClipLoader color="#fb923c" size={50} loading={true} />
      Loading...
    </div>
  );
}
