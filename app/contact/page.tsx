"use client";
import { Github, Mail, Phone } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const socials = [
  {
    icon: <Phone size={20} />,
    href: "tel:+393664760593",
    handle: "Leonardo",
    label: "+39 366 476 0593",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:amministrazione@cliquesrl.it",
    handle: "Email",
    label: "amministrazione@cliquesrl.it",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/CliqueSRL",
    handle: "Github",
    label: "CliqueSRL",
  },
];

function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
      <p className="mb-1">
        Clique S.r.l. — Sede legale: Via Roberto da Sanseverino, 95, 38122 Trento (TN)
      </p>
      <p className="mb-1">
        P.&nbsp;IVA / C.F.: 02745810222 
      </p>
      <p>
        Tel: +39&nbsp;366&nbsp;476&nbsp;0593 · Email:&nbsp;
        <a
          href="mailto:amministrazione@cliquesrl.it"
          className="hover:underline"
        >
          amministrazione@cliquesrl.it
        </a>
      </p>
    </footer>
  );
}

export default function Example() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <main className="flex flex-grow items-center justify-center">
        <div className="container mx-auto flex w-full items-center justify-center px-4">
          <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card key={s.handle}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16 md:py-24 lg:pb-48"
                >
                  <span
                    className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 drop-shadow-orange duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="font-display text-zinc-200 duration-150 group-hover:text-white lg:text-xl xl:text-3xl">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
