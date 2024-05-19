"use client";
import React, { useState } from "react";

import { useAuth } from "../../_contexts/AuthContext";

import { createUser } from "../../_actions/actions";

export default function CreateAccount() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [selectedCampaignTypes, setSelectedCampaignTypes] = useState<any>([]);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const campaignTypes = [
    "protecao animal",
    "reflorestamento",
    "agricultura",
    "poluicao sonora",
  ];

  const handleCampaignTypeSelection = (type: any) => {
    if (selectedCampaignTypes.includes(type)) {
      setSelectedCampaignTypes((currSelectedTypes: any) => {
        return currSelectedTypes.filter((item: any) => item !== type);
      });
    } else {
      selectedCampaignTypes.length < 3
        ? setSelectedCampaignTypes([type, ...selectedCampaignTypes])
        : "";
    }
  };

  const sections = {
    0: {
      title: "Qual e o seu nome?",
      subtitle:
        "Pessoas poderao lhe encontrar atraves desse nome, por isso recomendamos nao usar apelidos.",
      form: (
        <input
          placeholder="Primeiro e ultimo nome"
          className="w-full input-1"
          value={name}
          onChange={handleNameChange}
        ></input>
      ),
    },
    1: {
      title: "O que voce procura?",
      subtitle:
        "Escolha 3 tipos de campanhas que voce mais se interessa em apoiar.",
      form: (
        <div className="flex justify-between flex-wrap gap-2">
          {campaignTypes.map((type: any, index: any) => {
            return (
              <div
                onClick={() => handleCampaignTypeSelection(type)}
                key={index}
                className={`capitalize cursor-pointer btn-4 py-2 px-4 mb-4 rounded-full font-semibold text-sm ${
                  selectedCampaignTypes.includes(type)
                    ? "bg-primary text-foreground"
                    : "bg-secondary text-text"
                }`}
              >
                {type}
              </div>
            );
          })}
        </div>
      ),
    },
  };

  const [section, setSection] = useState<keyof typeof sections>(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newUser = await createUser({ ...user, name });
    setUser(newUser);
  };

  const handleNext = () => {
    setSection((prevSection) => (prevSection + 1) as keyof typeof sections);
  };

  const handlePrev = () => {
    setSection((prevSection) => (prevSection - 1) as keyof typeof sections);
  };

  return (
    <div className="w-full h-lvh flex items-center justify-center">
      <div
        className={`${
          section === 0 ? "" : "h-5/6"
        } container flex flex-col w-[30rem] max-h-[80vh]`}
      >
        <div className="pb-4 px-8 pt-6 flex flex-col gap-2">
          <div className="text-center text-lg text-text font-extrabold">
            {sections[section].title}
          </div>
          <div className="text-center text-sm text-subtext font-medium">
            {sections[section].subtitle}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 grow">
          {sections[section].form}
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="btn-3" onClick={handlePrev}>
            Voltar
          </button>
          <button className="btn-3" onClick={handleNext}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
