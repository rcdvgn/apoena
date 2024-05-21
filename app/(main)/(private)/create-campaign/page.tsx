"use client";

import React, { useState } from "react";

import {
  InProgressIcon,
  CompletedIcon,
  CameraIcon,
} from "../../../_components/icons";

export default function CreateCampaign() {
  const [pictureUrl, setPictureUrl] = useState("");
  const [title, setTitle] = useState("");

  const titleStyle = "text-text text-base font-extrabold mb-1";
  const subtitleStyle = "text-[13px] text-subtext font-medium mb-3";

  const handlePictureUrlChange = (e: any) => {
    setPictureUrl(e.target.value);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const sections = {
    0: {
      title: "Etapa 1",
      progress: 0,
      form: (
        <>
          <div className="flex flex-col">
            <div className={`${titleStyle} text-center mt-4`}>
              Criar campanha
            </div>
            <div className={`${subtitleStyle} text-center px-6`}>
              De um nome e capa para sua campanha
            </div>
            <div className="flex flex-col gap-4">
              <input
                value={title}
                onChange={handleTitleChange}
                type="text"
                className="input-2 w-full"
                placeholder="e. g. Floresta Viva"
              />
              <div className="flex justify-center w-full">
                <div
                  style={{ backgroundImage: `url(${pictureUrl})` }}
                  className="flex align-center justify-center w-56 aspect-square rounded-3xl bg-[#f2f2f2] bg-cover bg-center flex-shrink-0"
                >
                  {!pictureUrl ? (
                    <CameraIcon className="fill-subtext w-10" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                type="text"
                className="input-1 w-full"
                placeholder="https://url-da-imagem"
              />
            </div>
          </div>
        </>
      ),
    },
    1: {
      title: "Etapa 2",
      progress: 20,
      form: (
        <>
          {/* <div className="text-text text-base font-extrabold mb-4">
            {sections[section].title}
          </div> */}
          <div className="flex flex-col gap-8">
            <div className="">
              <div className={titleStyle}>Meta de arrecadação</div>
              <div className={subtitleStyle}>
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
              <div className={titleStyle}>Meta de arrecadação</div>
              <div className={subtitleStyle}>
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
              <div className={titleStyle}>Meta de arrecadação</div>
              <div className={subtitleStyle}>
                dddd voce considera o suficiente para financiar seu projeto?
                Voce pode alterar esse valor depois.
              </div>
              <input
                type="text"
                className="input-1 w-full"
                placeholder="Valor em Reais"
              />
            </div>
          </div>
        </>
      ),
    },
    2: { title: "Etapa 3", progress: 40, form: <></> },
    3: { title: "Etapa 4", progress: 60, form: <></> },
    4: { title: "Etapa 5", progress: 80, form: <></> },
    5: { title: "Etapa 6", progress: 100, form: <></> },
  };

  const [section, setSection] = useState<keyof typeof sections>(0);

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
        <div className={section > 0 ? "" : "hidden"}>
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
        <div className="p-4 grow overflow-auto">{sections[section].form}</div>
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
