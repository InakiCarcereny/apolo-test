import { Header, MainContent } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 w-full flex-1">
      <Header />

      <MainContent />
    </div>
  );
}
