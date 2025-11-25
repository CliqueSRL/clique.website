"use client";

import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import Link from "next/link";

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}
const navigation = [
  { name: "Progetti", href: "/projects" },
  { name: "Contatti", href: "/contact" },
];

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("homeVisited");
    if (!hasVisited) {
      setAnimate(true);
      sessionStorage.setItem("homeVisited", "true");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className={clsx("my-16", animate && "animate-fade-in")}>
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {animate && (
        <div className="hidden w-screen h-px md:block animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      )}

      <Particles
        className={clsx(
          "absolute inset-0 -z-10",
          animate && "animate-fade-in"
        )}
        quantity={isMobile ? 30 : 100}
      />

      <h1
        className={clsx(
          "py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text",
          !animate && "opacity-0",
          animate && "animate-title"
        )}
      >
        Clique
      </h1>

      {animate && (
        <div className="hidden w-screen h-px md:block animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      )}

      <div className={clsx("my-16 text-center", animate && "animate-fade-in")}>
        <h2 className="text-sm text-zinc-500">
          Software, elettronica, progettazione meccanica
        </h2>
      </div>
    </div>
  );
}
