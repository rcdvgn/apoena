"use client";

import React, { useState, useRef } from "react";

import { Switch } from "../../../_components/custom";

import { useAuth } from "../../../_contexts/AuthContext";

import { createCampaign } from "@/app/_actions/actions";

import {
  InProgressIcon,
  CompletedIcon,
  CameraIcon,
  AddPhotoIcon,
  TrashIcon,
  InfoIcon,
} from "../../../_components/icons";

import { useRouter } from "next/navigation";

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

const CampaignConfig = ({
  affectedRegion,
  setAffectedRegion,
  type,
  setType,
  goal,
  setGoal,
}: {
  affectedRegion: any;
  setAffectedRegion: any;
  type: any;
  setType: any;
  goal: any;
  setGoal: any;
}) => {
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
            pode alterar esse valor depois.
          </div>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type="number"
            className="input-1 w-full"
            placeholder="Valor em Reais"
          />
        </div>

        <div className="">
          <div className={titleStyle}>Tipo de campanha</div>
          <div className={subtitleStyle}>
            Escolha a opcao que melhor se enquadra com o tipo de campanha que
            voce quer criar.
          </div>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="input-1 w-full"
            placeholder="Tipo de campanha"
          />
        </div>

        <div className="">
          <div className={titleStyle}>Região afetada</div>
          <div className={subtitleStyle}>
            Que regiao brasileira e beneficiada ou hospeda a sua campanha?
          </div>
          <input
            value={affectedRegion}
            onChange={(e) => setAffectedRegion(e.target.value)}
            type="text"
            className="input-1 w-full"
            placeholder="e. g. Ilha do Combu"
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

const CampaignAdvanced = ({
  isNonProfit,
  setIsNonProfit,
  isCombu,
  setIsCombu,
  isAd,
  setIsAd,
}: {
  isNonProfit: any;
  setIsNonProfit: any;
  isCombu: any;
  setIsCombu: any;
  isAd: any;
  setIsAd: any;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <span className={titleStyle}>Sem fins lucrativos</span>
          <Switch
            value={isNonProfit}
            setValue={setIsNonProfit}
            onColor="primary"
            offColor="secondary"
          />
        </div>
        <div className={subtitleStyle}>
          Campanhas sem fins lucrativos nao usam o dinheiro arrecadado para
          beneficio pessoal de seu(s) organizador(es). Selecione essa opcao se a
          sua campanha ira destinar seus ganhos unicamente para sua causa.
        </div>
      </div>

      <div className="p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <span className={titleStyle}>Promocao paga</span>
          <Switch
            value={isAd}
            setValue={setIsAd}
            onColor="primary"
            offColor="secondary"
          />
        </div>
        <div className={subtitleStyle}>
          Promocoes pagas sao anúncios dentro da plataforma, campanhas desse
          tipo sao exibidos para mais pessoas.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-combu">
        <div className="flex justify-between items-center">
          <span className="text-foreground text-base font-extrabold mb-1">
            Campanha Combu
          </span>
          <Switch
            value={isCombu}
            setValue={setIsCombu}
            onColor="primary"
            offColor="secondary"
          />
        </div>
        <div className="text-[13px] text-foreground/80 font-medium mb-3">
          Campanhas voltadas para o beneficio da Ilha do Combu e seus moradores
          fazem parte do programa de visibilidade Combu!
        </div>
        <div className="flex items-center gap-1">
          <InfoIcon className="fill-foreground h-3" />
          <span className="text-[13px] text-foreground font-semibold">
            Aprender mais sobre Campanhas Combu
          </span>
        </div>
      </div>
    </div>
  );
};

export default function CreateCampaign() {
  const { user } = useAuth();
  const router = useRouter();

  const [section, setSection] = useState<keyof typeof sections>(0);

  const [pictureUrl, setPictureUrl] = useState("");
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [affectedRegion, setAffectedRegion] = useState("");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState(0);

  const [photos, setPhotos] = useState([]);

  const [isAd, setIsAd] = useState(false);
  const [isCombu, setIsCombu] = useState(false);
  const [isNonProfit, setIsNonProfit] = useState(false);

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
    2: {
      title: "Etapa 3",
      progress: 40,
      form: (
        <CampaignConfig
          affectedRegion={affectedRegion}
          setAffectedRegion={setAffectedRegion}
          type={type}
          setType={setType}
          goal={goal}
          setGoal={setGoal}
        />
      ),
    },
    3: {
      title: "Etapa 4",
      progress: 60,
      form: <CampaignPhotos photos={photos} setPhotos={setPhotos} />,
    },
    4: {
      title: "Etapa 5",
      progress: 80,
      form: (
        <CampaignAdvanced
          isNonProfit={isNonProfit}
          setIsNonProfit={setIsNonProfit}
          isCombu={isCombu}
          setIsCombu={setIsCombu}
          isAd={isAd}
          setIsAd={setIsAd}
        />
      ),
    },
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  const handleNext = () => {
    if (section === 0 && (pictureUrl === "" || title === "")) return;
    setSection((prevSection) => (prevSection + 1) as keyof typeof sections);
  };

  const handlePrev = () => {
    setSection((prevSection) => (prevSection - 1) as keyof typeof sections);
  };

  const handleCancel = () => {
    router.push("/campaigns");
  };

  const handleSubmit = async () => {
    // TODO: CHECK FIELDS
    // TODO: MULTIPLY GOAL BY 100
    // TODO: CHANGE AFFECTED REGION TO ILHA DO COMBU IF ISCOMBU === TRUE
    const createdCampaign = await createCampaign(
      user.uid,
      title,
      pictureUrl,
      description,
      affectedRegion,
      type,
      goal,
      photos,
      isNonProfit,
      isCombu,
      isAd
    );
    console.log(createdCampaign);
    router.push("/campaigns");
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
              className="rounded-lg h-12 aspect-square bg-cover bg-center flex-shrink-0"
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
          {section > 0 ? (
            <button className="btn-3" onClick={handlePrev}>
              Voltar
            </button>
          ) : (
            <button className="btn-3" onClick={handleCancel}>
              Cancelar
            </button>
          )}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-intratext text-[11px]">
                {sections[section].progress}% concluido
              </span>
              <CompletedIcon className="h-3" />
            </div>
            {sections[section].progress == 80 ? (
              <button className="btn-2" onClick={handleSubmit}>
                Publicar!
              </button>
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
