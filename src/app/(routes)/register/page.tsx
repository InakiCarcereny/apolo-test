import { RegisterForm, RegisterHeader } from "./components";

import "@/app/styles/register.css";

export default function Register() {
  return (
    <div className="register w-full h-screen flex place-content-end">
      <aside className="flex flex-col gap-6 w-full md:w-[450px] h-full bg-white px-8 py-4">
        <RegisterHeader />

        <RegisterForm />
      </aside>
    </div>
  );
}
