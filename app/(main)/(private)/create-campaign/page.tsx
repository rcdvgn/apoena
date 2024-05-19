"use client";

import React, { useState } from "react";

import { InProgressIcon, CompletedIcon } from "../../../_components/icons";

export default function CreateCampaign() {
  const sections = {
    0: { title: "Etapa 1", progress: 0 },
    1: { title: "Etapa 2", progress: 20 },
    2: { title: "Etapa 3", progress: 40 },
    3: { title: "Etapa 4", progress: 60 },
    4: { title: "Etapa 5", progress: 80 },
    5: { title: "Etapa 6", progress: 100 },
  };

  const [section, setSection] = useState<keyof typeof sections>(1);

  const [title, setTitle] = useState("Projeto Florest Viva");
  const [pictureUrl, setPictureUrl] = useState(
    "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [goal, setGoal] = useState(0);
  const [isAd, setIsAd] = useState("");
  const [isCombu, setIsCombu] = useState("");
  const [isNonProfit, setIsNonProfit] = useState("");
  const [affectedRegion, setAffectedRegion] = useState("");

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  const handleNext = () => {
    setSection((prevSection) => (prevSection + 1) as keyof typeof sections);
  };

  const handlePrev = () => {
    setSection((prevSection) => (prevSection - 1) as keyof typeof sections);
  };

  return (
    <div className="w-full grow flex items-center justify-center">
      <div
        style={{
          height: "80vh",
        }}
        // onSubmit={handleSubmit}
        className="container flex flex-col w-[30rem] h-5/6"
      >
        <div className="">
          <div className="flex items-center p-4 gap-4">
            <div
              style={{ backgroundImage: `url(${pictureUrl})` }}
              className="rounded-2xl h-16 aspect-square bg-cover bg-center flex-shrink-0"
            ></div>
            <span className="text-sm font-extrabold text-text">{title}</span>
          </div>
          <div className="h-[2px] w-auto bg-primary/30">
            <div
              style={{
                width: `${sections[section].progress}%`,
              }}
              className="h-full rounded-full bg-primary"
            ></div>
          </div>
        </div>
        <div className="p-4 grow overflow-auto">
          <div className="text-text text-base font-extrabold mb-4">
            {sections[section].title}
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <div className="text-text text-sm font-extrabold mb-1">
                Meta de arrecadação
              </div>
              <div className="text-subtext text-xs font-semibold mb-3">
                Quanto voce considera o suficiente para financiar seu projeto?
                Voce pode alterar esse valor depois.
              </div>
              <input
                type="text"
                className="input-1 w-full"
                placeholder="Valor em Reais"
              />
            </div>

            <div className="">
              <div className="text-text text-sm font-extrabold mb-1">
                Meta de arrecadação
              </div>
              <div className="text-subtext text-xs font-semibold mb-3">
                Quanto voce considera o suficiente para financiar seu projeto?
                Voce pode alterar esse valor depois.
              </div>
              <input
                type="text"
                className="input-1 w-full"
                placeholder="Valor em Reais"
              />
            </div>

            <div className="">
              <div className="text-text text-sm font-extrabold mb-1">
                Meta de arrecadação
              </div>
              <div className="text-subtext text-xs font-semibold mb-3">
                Quanto voce considera o suficiente para financiar seu projeto?
                Voce pode alterar esse valor depois.
              </div>
              <input
                type="text"
                className="input-1 w-full"
                placeholder="Valor em Reais"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="btn-3" onClick={handlePrev}>
            Voltar
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-intratext text-[11px]">
                {sections[section].progress}% concluido
              </span>
              {sections[section].progress !== 100 ? (
                <InProgressIcon className="h-3" />
              ) : (
                <CompletedIcon className="h-3" />
              )}
            </div>
            {sections[section].progress == 80 ? (
              <button className="btn-2">Publicar!</button>
            ) : (
              <button className="btn-3" onClick={handleNext}>
                Continuar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
