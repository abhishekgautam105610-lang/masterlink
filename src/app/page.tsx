import Link from "next/link";
import { Link2, Lock, MessageSquare, Share2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Link2 className="h-4 w-4 text-white" />
          </span>
          MasterLink
        </div>
        <Link
          href="/login"
          className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Lock className="h-4 w-4" />
          Admin Sign in
        </Link>
      </header>

      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Shareable messaging links,{" "}
          <span className="text-blue-600">one tap from Send</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">
          Generate links that open a visitor&rsquo;s messaging app with the recipient and
          message already filled in. They just press Send.
        </p>

        <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: <MessageSquare className="h-5 w-5" />,
              title: "Pre-filled",
              text: "Recipient and message are filled automatically.",
            },
            {
              icon: <Share2 className="h-5 w-5" />,
              title: "Shareable",
              text: "Unique URLs with QR codes and one-click copy.",
            },
            {
              icon: <Link2 className="h-5 w-5" />,
              title: "Tracked",
              text: "See clicks, last opened and audience breakdown.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-slate-400">
        MasterLink — admin access required
      </footer>
    </main>
  );
}
