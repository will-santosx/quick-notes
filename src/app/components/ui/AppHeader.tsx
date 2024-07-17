"use client";
import { Menu, CirclePlus, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function AppHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <>
      <header className="w-full h-[80px] md:text-[18px] border-b-4 border-b-black border-opacity-30 px-[40px] py-[10px] md:px-[120px]">
        <div className="flex w-full h-full items-center justify-between">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="focus:bg-black focus:bg-opacity-30 outline-none rounded-full w-[30px] h-[30px] flex items-center justify-center md:hidden"
          >
            <Menu />
          </button>
          <h2>Quick Notes</h2>
          <nav className="gap-[50px] hidden md:flex underline">
            <Link href={"/"}>Início</Link>
            <Link href={"/sobre"}>Sobre</Link>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }
            >
              Alterar Tema
            </button>
          </nav>
          <button className="focus:bg-black focus:bg-opacity-30 outline-none rounded-full w-[30px] h-[30px] flex items-center justify-center">
            <Link href={"/new-note"}>
              <CirclePlus />
            </Link>
          </button>
        </div>
        {isMenuOpen ? (
          <div className="fixed inset-0 bg-white z-50 flex flex-col px-[40px] py-[25px]">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="focus:bg-black focus:bg-opacity-30 outline-none rounded-full w-[30px] h-[30px] flex items-center justify-center"
              >
                <X />
              </button>
            </div>
            <div className="h-screen w-full flex flex-col justify-center gap-[15px] underline">
              <button onClick={() => setMenuOpen(false)}>
                <Link href={"/"}>Início</Link>
              </button>
              <button onClick={() => setMenuOpen(false)}>
                <Link href={"/sobre"}>Sobre</Link>
              </button>
              <button onClick={() => setMenuOpen(false)}>Alterar Tema</button>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}