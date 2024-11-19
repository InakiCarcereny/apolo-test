import { EditCharacter } from "./components";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ characterId: string }>;
}) {
  const characterId = (await params).characterId;

  return <EditCharacter characterId={characterId} />;
}
