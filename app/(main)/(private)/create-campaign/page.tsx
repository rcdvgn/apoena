"use client";

import React, { useState, useRef } from "react";

import {
  InProgressIcon,
  CompletedIcon,
  CameraIcon,
  AddPhotoIcon,
  TrashIcon,
} from "../../../_components/icons";

const titleStyle = "text-text text-base font-extrabold mb-1";
const subtitleStyle = "text-[13px] text-subtext font-medium mb-3";

const CampaignBasics = ({
  title,
  pictureUrl,
  setTitle,
  setPictureUrl,
}: {
  title: any;
  pictureUrl: any;
  setTitle: any;
  setPictureUrl: any;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className={`${titleStyle} text-center mt-4`}>Criar campanha</div>
        <div className={`${subtitleStyle} text-center px-6`}>
          De um nome e capa para sua campanha
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="input-2 w-full"
            placeholder="e. g. Floresta Viva"
          />
          <div className="flex justify-center w-full">
            <div
              style={{ backgroundImage: `url(${pictureUrl})` }}
              className="flex align-center justify-center w-56 aspect-square rounded-3xl bg-[#f2f2f2] bg-cover bg-center flex-shrink-0"
            >
              {!pictureUrl ? <CameraIcon className="fill-subtext w-10" /> : ""}
            </div>
          </div>
          <input
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            type="text"
            className="input-1 w-full"
            placeholder="https://url-da-imagem"
          />
        </div>
      </div>
    </>
  );
};

const CampaignDescription = ({
  description,
  setDescription,
}: {
  description: any;
  setDescription: any;
}) => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col h-full">
        <div className={titleStyle}>Descrição</div>
        <div className={subtitleStyle}>
          Explique com suas palavras do que essa campanha se trata
        </div>
        <textarea
          maxLength={200}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-1 w-full grow"
          placeholder="Minha campanha..."
        />
      </div>
    </div>
  );
};

const CampaignConfig = () => {
  return (
    <>
      {/* <div className="text-text text-base font-extrabold mb-4">
        {sections[section].title}
      </div> */}
      <div className="flex flex-col gap-8">
        <div className="">
          <div className={titleStyle}>Meta de arrecadação</div>
          <div className={subtitleStyle}>
            Quanto voce considera o suficiente para financiar seu projeto? Voce
            pode alterar esse valor depois
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
            Quanto voce considera o suficiente para financiar seu projeto? Voce
            pode alterar esse valor depois
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
            Quanto voce considera o suficiente para financiar seu projeto? Voce
            pode alterar esse valor depois
          </div>
          <input
            type="text"
            className="input-1 w-full"
            placeholder="Valor em Reais"
          />
        </div>
      </div>
    </>
  );
};

const CampaignPhotos = ({
  photos,
  setPhotos,
}: {
  photos: any;
  setPhotos: any;
}) => {
  const newPhotoInput = useRef<any>(null);
  const handleNewPhoto = (e: any) => {
    e.preventDefault();
    // TODO - ADD URL CHECK
    if (newPhotoInput.current !== null) {
      setPhotos([...photos, newPhotoInput.current.value]);
      newPhotoInput.current.value = "";
    }
  };

  const handleDeletePhoto = (url: any) => {
    if (!photos.includes(url)) {
      return;
    }

    setPhotos(photos.filter((photo: any) => photo !== url));
  };

  return (
    <form onSubmit={handleNewPhoto} className="flex flex-col gap-8 h-full">
      <div className="flex flex-col h-full">
        <div className={titleStyle}>Fotos adicionais</div>
        <div className={subtitleStyle}>
          Adicione fotos que ilustram o espirito ou andamento da sua campanha
        </div>
        <div className="flex gap-4 flex-wrap">
          <div
            // onClick={newPhotoInput.current ? newPhotoInput.current.focus() : ""}
            className="group cursor-pointer bg-negative-space hover:bg-primary-bg rounded-lg grid place-items-center h-16 aspect-square"
          >
            <AddPhotoIcon className="fill-placeholder h-4 group-hover:fill-primary" />
          </div>
          {photos.map((url: any, index: any) => {
            return (
              <div
                onClick={() => handleDeletePhoto(url)}
                key={index}
                style={{ backgroundImage: `url(${url})` }}
                className="ring-inset hover:ring-2 hover:ring-warning relative cursor-pointer rounded-lg h-16 aspect-square bg-cover bg-center flex-shrink-0 overflow-hidden"
              >
                <div className="group absolute h-full w-full hover:bg-warning/15 grid place-items-center">
                  <TrashIcon className="hidden h-4 fill-warning group-hover:block" />
                </div>
              </div>
            );
          })}
        </div>
        <input
          ref={newPhotoInput}
          type="text"
          className="input-1 w-full mt-auto"
          placeholder="https://url-da-imagem"
        />
      </div>
    </form>
  );
};

export default function CreateCampaign() {
  const [pictureUrl, setPictureUrl] = useState("");
  const [title, setTitle] = useState("");
  const [section, setSection] = useState<keyof typeof sections>(0);
  const [description, setDescription] = useState("");
  // const [type, setType] = useState("");

  const [photos, setPhotos] = useState([]);
  // const [goal, setGoal] = useState(0);
  // const [isAd, setIsAd] = useState("");
  // const [isCombu, setIsCombu] = useState("");
  // const [isNonProfit, setIsNonProfit] = useState("");
  // const [affectedRegion, setAffectedRegion] = useState("");

  const sections = {
    0: {
      title: "Etapa 1",
      progress: 0,
      form: (
        <CampaignBasics
          title={title}
          pictureUrl={pictureUrl}
          setTitle={setTitle}
          setPictureUrl={setPictureUrl}
        />
      ),
    },
    1: {
      title: "Etapa 2",
      progress: 20,
      form: (
        <CampaignDescription
          description={description}
          setDescription={setDescription}
        />
      ),
    },
    2: { title: "Etapa 3", progress: 40, form: <CampaignConfig /> },
    3: {
      title: "Etapa 4",
      progress: 60,
      form: <CampaignPhotos photos={photos} setPhotos={setPhotos} />,
    },
    4: { title: "Etapa 5", progress: 80, form: <></> },
    5: { title: "Etapa 6", progress: 100, form: <></> },
  };

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
              <CompletedIcon className="h-3" />
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
