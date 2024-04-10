import React from "react";

export default function SignUp() {
  return (
    <div className="container flex flex-col gap-10 px-8 py-10 w-auto">
      <div className="flex justify-between">
        <span className="text-primary font-black text-xl">Apoena</span>
        <span className="font-semibold text-subtext text-lg">Criar conta</span>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-text font-semibold text-base">Email</span>
          <div className="">
            <input
              type="email"
              spellCheck="false"
              placeholder="Seu melhor email"
              className="w-[400px] h-12 input-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-text font-semibold text-base">Senha</span>
          <div className="">
            <input
              type="password"
              placeholder="Crie uma senha"
              className="w-[400px] h-12 input-1"
            />
          </div>
        </div>
      </div>

      <div className="">
        <button className="w-full h-12 btn-1">Criar conta</button>
      </div>
    </div>
  );
}
