import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-orange-900 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-cyan-900" />

        <div className="relative z-10 container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Jump into the Portal
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 min-w-[200px] mx-auto">
              <Link href="/login">
                <button className="bg-orange-400 text-white font-semibold px-8 py-6 text-lg rounded-[4px]">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-transparent text-white font-semibold px-8 py-6 text-lg border-2 border-orange-400 rounded-[4px]">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
