"use client";

import React, { useState, useRef } from "react";

import { SearchIcon, ClearInputIcon } from "./icons";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const inputRef = useRef<any>(null);

  const clearSearch = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element after the state update
    }
  };

  return (
    <div className="group flex items-center h-10 grow bg-foreground/60 focus-within:bg-foreground rounded-full transition-all ease-in-out">
      <SearchIcon className="fill-subtext/75 h-4 mx-4 group-focus-within:fill-subtext" />
      <input
        ref={inputRef}
        placeholder="Causas, ideias e pessoas para apoiar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        spellCheck="false"
        className="border-none outline-none bg-transparent h-full grow text-text/75 text-xs font-semibold focus:text-text"
      />
      {searchQuery ? (
        <span
          onClick={clearSearch}
          className="p-2 mx-4 cursor-pointer rounded-full hover:bg-text/10"
        >
          <ClearInputIcon className="fill-subtext/75 h-3" />
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
