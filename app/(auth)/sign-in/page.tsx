"use client";

import React, { useState } from "react";

import { useAuth } from "../../_contexts/AuthContext";

export default function SignIn() {
  const { signInWithEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await signInWithEmail(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-col gap-10 px-8 py-10 w-auto"
    >
      <div className="flex justify-between">
        <span className="text-primary font-black text-xl">Apoena</span>
        <span className="font-semibold text-subtext text-lg">Entrar</span>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-text font-semibold text-base">Email</span>
          <div className="">
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              spellCheck="false"
              placeholder="Insira seu email"
              className="w-[400px] h-12 input-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-text font-semibold text-base">Senha</span>
          <div className="">
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Insira sua senha"
              className="w-[400px] h-12 input-1"
            />
          </div>
        </div>
      </div>

      <div className="">
        <button type="submit" className="w-full h-12 btn-1">
          Entrar
        </button>
      </div>
    </form>
  );
}
