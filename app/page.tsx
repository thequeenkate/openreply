import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reply.exe",
  description:
    "Turns Instagram keyword comments into automatic private replies using the official Meta API.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "Connect",
    body: "Link an Instagram professional account once, through Instagram's own permission screen. No password is shared and no browser is automated.",
  },
  {
    title: "Set a keyword",
    body: "Pick a post or reel, choose the word people comment, and write the direct message they should get back.",
  },
  {
    title: "It runs",
    body: "Instagram notifies this app the moment a matching comment lands, and the message goes out. Every send is queued, rate limited, and logged.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5 sm:px-6">
          <span className="text-lg font-bold text-zinc-900">reply.exe</span>
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Log in
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-4xl px-5 pb-20 pt-16 sm:px-6 sm:pt-24">
        <h1 className="text-balance text-4xl font-black leading-[1.05] text-zinc-900 sm:text-5xl">
          Instagram comment to DM automation
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          When someone comments a keyword on a post or reel, this sends them a
          direct message with the link. It runs on Instagram&apos;s official API,
          which means it never asks for a password and never pretends to be a
          person clicking around the app.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-xs font-bold text-orange-600">
                Step {i + 1}
              </div>
              <div className="mt-2 text-base font-bold text-zinc-900">
                {step.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-zinc-200 pt-8">
          <p className="text-sm leading-6 text-zinc-500">
            This is a private instance. Sign in is restricted to the account
            owner.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>reply.exe</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-zinc-900">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-zinc-900">
              Terms
            </Link>
            <Link href="/data-deletion" className="transition hover:text-zinc-900">
              Data deletion
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
