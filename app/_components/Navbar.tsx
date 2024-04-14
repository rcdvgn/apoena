import React from "react";
import Link from "next/link";

import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="z-10 sticky top-0 flex gap-16 justify-between items-center px-8 h-16 w-full bg-gradient-to-r from-primary-light via-primary to-primary-dark">
      <span className="text-foreground font-black text-xl mt-[-7px]">
        Apoena
      </span>
      <Link
        className="text-foreground font-bold text-sm hover:opacity-80"
        href="/campaigns"
      >
        Campanhas
      </Link>
      <Link
        className="text-foreground font-bold text-sm hover:opacity-80"
        href="/campaigns"
      >
        Programa Combu
      </Link>
      <Link
        className="text-foreground font-bold text-sm hover:opacity-80"
        href="/campaigns"
      >
        Sobre
      </Link>
      <Searchbar />
      <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2021/04/05/12/38/man-6153295_1280.jpg")`,
        }}
        className="h-9 rounded-full aspect-square bg-cover bg-center flex-shrink-0 cursor-pointer"
      ></div>
    </div>
  );
}
