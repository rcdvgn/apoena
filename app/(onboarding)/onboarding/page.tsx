"use client";
import React, { useState } from "react";

import { useAuth } from "../../_contexts/AuthContext";

import { createUser } from "../../_actions/actions";

export default function CreateAccount() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newUser = await createUser({ ...user, name });
    setUser(newUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container w-auto p-4 flex flex-col gap-4"
    >
      <input
        placeholder="Primeiro e ultimo nome"
        className="w-[400px] input-1"
        value={name}
        onChange={handleNameChange}
      ></input>
      <button type="submit" className="btn-1 w-full h-12">
        Criar conta
      </button>
    </form>
  );
}
