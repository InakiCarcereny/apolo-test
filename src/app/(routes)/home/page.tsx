import { Header, MainContent } from "./components";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  return (
    <div className="flex flex-col gap-14 w-full flex-1">
      <Header />

      <MainContent query={query} />
    </div>
  );
}
