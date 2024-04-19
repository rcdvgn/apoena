"use client";

import React from "react";
import Link from "next/link";

import { useAuth } from "../_contexts/AuthContext";

import Searchbar from "./Searchbar";

export default function Navbar() {
  const { signOff } = useAuth();
  const handleSignOff = () => {
    signOff();
  };
  return (
    <div className="flex shadow-sm gap-16 justify-between items-center px-8 h-16 w-full bg-gradient-to-r from-primary-light via-primary to-primary-dark">
      <span className="text-foreground font-black text-xl mt-[-7px]">
        Apoena
      </span>
      <Link
        className="text-foreground font-bold text-[13px] hover:opacity-80"
        href="/campaigns"
      >
        Campanhas
      </Link>
      <Link
        className="text-foreground font-bold text-[13px] hover:opacity-80"
        href="/campaigns"
      >
        Programa Combu
      </Link>
      <Link
        className="text-foreground font-bold text-[13px] hover:opacity-80"
        href="/create-campaign"
      >
        Sobre
      </Link>
      <Searchbar />
      <div
        onClick={handleSignOff}
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2021/04/05/12/38/man-6153295_1280.jpg")`,
        }}
        className="h-9 rounded-full aspect-square bg-cover bg-center flex-shrink-0 cursor-pointer"
      ></div>
    </div>
  );
}
