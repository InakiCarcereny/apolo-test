import { CharacterList } from "../character-list";

export function MainContent() {
  return (
    <main className="mx-auto max-w-[1250px] flex flex-col flex-1">
      <CharacterList />
    </main>
  );
}
