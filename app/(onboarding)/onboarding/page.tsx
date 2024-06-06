"use client";
import React, { useState, useEffect } from "react";

import { useAuth } from "../../_contexts/AuthContext";

import { createUser, getCampaigns } from "../../_actions/actions";

import recommendationEngine from "@/app/_utils/recommendationEngine";

const DisplayName = ({
  name,
  handleNameChange,
}: {
  name: any;
  handleNameChange: any;
}) => {
  return (
    <input
      placeholder="Primeiro e ultimo nome"
      className="w-full input-1"
      value={name}
      onChange={handleNameChange}
    ></input>
  );
};

const Types = ({
  campaignTypes,
  selectedCampaignTypes,
  handleCampaignTypeSelection,
}: {
  campaignTypes: any;
  selectedCampaignTypes: any;
  handleCampaignTypeSelection: any;
}) => {
  return (
    <div className="flex justify-between flex-wrap gap-2">
      {campaignTypes.map((type: any, index: any) => {
        return (
          <div
            onClick={() => handleCampaignTypeSelection(type)}
            key={index}
            className={`capitalize cursor-pointer btn-4 py-2 px-4 mb-4 rounded-full font-semibold text-sm ${
              selectedCampaignTypes.includes(type)
                ? "bg-primary text-foreground"
                : "bg-negative-space text-intratext hover:bg-primary-bg hover:text-primary"
            }`}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

const Regions = ({
  campaignRegions,
  selectedCampaignRegions,
  handleCampaignRegionSelection,
}: {
  campaignRegions: any;
  selectedCampaignRegions: any;
  handleCampaignRegionSelection: any;
}) => {
  return (
    <div className="flex justify-between flex-wrap gap-2">
      {campaignRegions.map((type: any, index: any) => {
        return (
          <div
            onClick={() => handleCampaignRegionSelection(type)}
            key={index}
            className={`capitalize cursor-pointer btn-4 py-2 px-4 mb-4 rounded-full font-semibold text-sm ${
              selectedCampaignRegions.includes(type)
                ? "bg-primary text-foreground"
                : "bg-negative-space text-intratext hover:bg-primary-bg hover:text-primary"
            }`}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default function CreateAccount() {
  const { user, setUser, campaignTypes } = useAuth();
  const [name, setName] = useState("");

  const [selectedCampaignTypes, setSelectedCampaignTypes] = useState<any>([]);

  const [campaigns, setCampaigns] = useState<any>([]);
  const campaignRegions = campaigns.length
    ? campaigns
        .map((camp: any) => camp.affectedRegion)
        .filter(
          (value: any, index: any, self: any) => self.indexOf(value) === index
        )
    : [];

  const [selectedCampaignRegions, setSelectedCampaignRegions] = useState<any>(
    []
  );

  const [savedCampaigns, setSavedCampaigns] = useState<any>([]);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

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

  const handleCampaignRegionSelection = (region: any) => {
    if (selectedCampaignRegions.includes(region)) {
      setSelectedCampaignRegions((currSelectedRegions: any) => {
        return currSelectedRegions.filter((item: any) => item !== region);
      });
    } else {
      selectedCampaignRegions.length < 3
        ? setSelectedCampaignRegions([region, ...selectedCampaignRegions])
        : "";
    }
  };

  const handleCampaignSave = (campaign: any) => {
    console.log(campaign);
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsData = await getCampaigns();
      console.log(campaignsData);
      setCampaigns(campaignsData);
      // campaignsData !== undefined ? setSelectedCampaign(campaignsData[0]) : "";
    };

    fetchCampaigns();
  }, []);

  const sections = {
    0: {
      title: "Qual e o seu nome?",
      subtitle:
        "Pessoas poderão lhe encontrar atraves desse nome, por isso recomendamos não usar apelidos.",
      form: <DisplayName name={name} handleNameChange={handleNameChange} />,
    },
    1: {
      title: "Que tipo de campanha voce procura?",
      subtitle:
        "Escolha 3 tipos de campanhas que voce mais se interessa em apoiar.",
      form: (
        <Types
          campaignTypes={campaignTypes}
          selectedCampaignTypes={selectedCampaignTypes}
          handleCampaignTypeSelection={handleCampaignTypeSelection}
        />
      ),
    },
    2: {
      title: "Quais sao as suas regiões de interesse?",
      subtitle: "Escolha 3 regiões que voce mais se interessa em apoiar.",
      form: (
        <Regions
          campaignRegions={campaignRegions}
          selectedCampaignRegions={selectedCampaignRegions}
          handleCampaignRegionSelection={handleCampaignRegionSelection}
        />
      ),
    },
  };

  const [section, setSection] = useState<keyof typeof sections>(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const interests = {
      types: selectedCampaignTypes,
      affectedRegions: selectedCampaignRegions,
    };

    const recommendations = recommendationEngine(campaigns, interests);

    // console.log(recommendations);

    sessionStorage.setItem("firstAccess", JSON.stringify(true));
    sessionStorage.setItem("recommendations", JSON.stringify(recommendations));

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
        <div className="p-4 flex flex-col gap-2 overflow-auto">
          {sections[section].form}
        </div>
        <div className="flex justify-between items-center p-4 mt-auto">
          <button className="btn-3" onClick={handlePrev}>
            Voltar
          </button>
          {section === 2 ? (
            <button className="btn-2" onClick={handleSubmit}>
              Criar conta
            </button>
          ) : (
            <button className="btn-3" onClick={handleNext}>
              Continuar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
