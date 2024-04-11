"use client";
import React, { useState } from "react";

export default function CreateAccount() {
  const [name, setName] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container w-auto p-4 flex flex-col gap-4"
    >
      <input
        placeholder="Primeiro e ultimo nome"
        className="w-[400px] h-12 input-1"
        value={name}
        onChange={handleNameChange}
      ></input>
      <button type="submit" className="btn-1 w-full h-12">
        Criar conta
      </button>
    </form>
  );
}
