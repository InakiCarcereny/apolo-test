import { CharacterList } from "../character-list";
import { Query } from "@/app/models";

export function MainContent({ query }: Query) {
  return (
    <main className="mx-auto max-w-[1250px] flex flex-col h-full mb-4 md:px-4 xl:px-0">
      <CharacterList query={query} />
    </main>
  );
}
