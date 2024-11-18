import { CharacterList } from "../character-list";

export function MainContent() {
  return (
    <main className="mx-auto max-w-[1250px] flex flex-col h-full mb-4">
      <CharacterList />
    </main>
  );
}
