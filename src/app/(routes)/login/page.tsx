import "@/app/styles/login.css";

import { LoginForm, LoginHeader } from "./components";

export default function Login() {
  return (
    <div className="login w-full h-screen">
      <aside className="flex flex-col gap-6 w-full sm:w-[450px] h-full bg-white px-8 py-4">
        <LoginHeader />

        <LoginForm />
      </aside>
    </div>
  );
}
