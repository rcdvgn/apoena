"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useAuth } from "../_contexts/AuthContext";

import Searchbar from "./Searchbar";

import { SettingsIcon } from "../_components/icons";

const Menu = () => {
  return (
    <div className="bg-foreground rounded-lg absolute right-0 top-[135%] overflow-hidden select-none p-1">
      <div className="rounded-md flex items-center justify-start gap-4 py-2 pl-3 pr-8 group hover:bg-primary-bg cursor-pointer ">
        <SettingsIcon className="fill-intratext h-4 group-hover:fill-primary" />
        <span className="text-intratext text-sm font-semibold group-hover:text-primary">
          Configuracoes
        </span>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { signOff } = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenuVisible((currMenuVisibility) => !currMenuVisibility);
  };

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
      <div className="relative">
        <div
          onClick={handleMenu}
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2021/04/05/12/38/man-6153295_1280.jpg")`,
          }}
          className="h-8 rounded-full aspect-square bg-cover bg-center flex-shrink-0 cursor-pointer"
        ></div>

        {menuVisible && <Menu />}
      </div>
    </div>
  );
}
