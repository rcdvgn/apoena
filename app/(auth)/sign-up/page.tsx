"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useAuth } from "../../_contexts/AuthContext";
import { redirect } from "next/navigation";

export default function SignUp() {
  const { signUpWithEmail } = useAuth();

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

    await signUpWithEmail(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-col gap-10 px-8 py-10 w-auto"
    >
      <div className="flex justify-between">
        <span className="text-primary font-black text-xl">Apoena</span>
        <span className="font-semibold text-subtext text-lg">Criar conta</span>
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
              placeholder="Seu melhor email"
              className="w-[400px] input-1"
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
              placeholder="Crie uma senha"
              className="w-[400px] input-1"
            />
          </div>
        </div>
      </div>

      <div className="">
        <span className="text-subtext font-bold text-base">
          Já possuo conta.{" "}
        </span>

        <Link
          className="hover:underline text-primary font-bold text-base"
          href="/sign-in"
        >
          Fazer login
        </Link>
      </div>

      <div className="">
        <button type="submit" className="w-full h-12 btn-1">
          Criar conta
        </button>
      </div>
    </form>
  );
}
