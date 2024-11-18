// "use client";

// import { useLocalStorage } from "@/app/hooks";
// import { useEffect, useState } from "react";
import { Header, MainContent } from "./components";

export default function Home() {
  // const [user, setUser] = useState<string>("");

  // const { storedValue } = useLocalStorage("user", {});

  // useEffect(() => {
  //   setUser(storedValue.username);
  // }, [storedValue]);

  return (
    <div className="flex flex-col gap-10 w-full h-screen bg-zinc-100">
      <Header />

      <MainContent />

      <footer>fajlskef</footer>
    </div>
  );
}
