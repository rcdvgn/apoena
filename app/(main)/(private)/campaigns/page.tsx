"use client";

import React, { useState, useEffect } from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

import { getCampaigns, getRecommendations } from "../../../_actions/actions";

import { SaveIcon } from "@/app/_components/icons";

// import { campaigns } from "./data";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<any>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const [recommendations, setRecommendations] = useState<any>([]);

  const [selectedRecommendations, setSelectedRecommendations] = useState<any>(
    []
  );

  document.body.style.overflow = recommendations.length ? "hidden" : "unset";

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsData = await getCampaigns();
      setCampaigns(campaignsData);
      campaignsData !== undefined ? setSelectedCampaign(campaignsData[0]) : "";
    };

    const fetchRecommendations = async (recommendationsIds: any) => {
      // console.log(recommendationsIds);
      const campaignsRecsData = await getRecommendations(recommendationsIds);
      // console.log(campaignsRecsData);
      setRecommendations(campaignsRecsData);
    };

    const checkFirstAccess = () => {
      let firstAccess = sessionStorage.getItem("firstAccess");
      if (firstAccess !== null) {
        firstAccess = JSON.parse(firstAccess);

        let recommendationsData = sessionStorage.getItem("recommendations");
        if (recommendationsData !== null) {
          recommendationsData.length
            ? fetchRecommendations(JSON.parse(recommendationsData))
            : "";
        }
      }
    };

    checkFirstAccess();
    fetchCampaigns();
  }, []);

  // useEffect(() => {
  //   campaigns && !selectedCampaign ? setSelectedCampaign(campaigns[0]) : "";
  // }, [campaigns]);

  const closeRecommendations = () => {
    sessionStorage.removeItem("firstAccess");
    sessionStorage.removeItem("recommendations");
    setRecommendations([]);
  };

  const handleAddRecommendation = (uid: any) => {
    if (selectedRecommendations.includes(uid)) {
      setSelectedRecommendations((currSelectedRecs: any) =>
        currSelectedRecs.filter((recUid: any) => recUid !== uid)
      );
    } else {
      setSelectedRecommendations((currSelctedRecs: any) => [
        ...currSelctedRecs,
        uid,
      ]);
    }
  };

  return (
    <>
      <div className="px-8 w-full max-w-[78rem]">
        <Filters />
        <div className="flex gap-4 pb-4">
          <div className="flex flex-col min-w-[30rem] w-[30rem] gap-4 pt-4">
            {campaigns
              ? campaigns.map((item: any, index: any) => {
                  return (
                    <CampaignCard
                      key={index}
                      campaign={item}
                      setSelectedCampaign={setSelectedCampaign}
                    />
                  );
                })
              : ""}
          </div>
          <div className="flex-shrink-1 grow h-auto">
            <div className="flex flex-col gap-4 pt-4 h-[calc(100vh-1rem)] sticky top-0">
              {selectedCampaign && (
                <CampaignDetails
                  campaign={selectedCampaign}
                  setSelectedCampaign={setSelectedCampaign}
                  // campaigns={campaigns}
                  // setCampaigns={setCampaigns}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {recommendations.length ? (
        <div className="fixed top-0 left-0 m-auto h-lvh w-full flex justify-center items-center bg-black/10">
          <div className="container flex flex-col w-[30rem] p-4 h-5/6 max-h-[80vh]">
            <div className="pb-4 px-8 pt-6 flex flex-col gap-2">
              <div className="text-center text-lg text-text font-extrabold">
                Bem vindo ao Apoena!
              </div>
              <div className="text-center text-sm text-subtext font-medium">
                Separamos algumas iniciativas que combinam com voce. Companhas
                selecionadas agora ficarao salvas no seu perfil, caso decida
                apoia-las no futuro.
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2 overflow-auto">
              <div className="flex flex-col gap-4">
                {recommendations.map((item: any, index: any) => {
                  return (
                    <div
                      onClick={() => handleAddRecommendation(item.uid)}
                      key={index}
                      className={`group rounded-lg p-4 cursor-pointer hover:bg-primary/10 ${
                        selectedRecommendations.includes(item.uid)
                          ? "bg-primary/10"
                          : ""
                      }`}
                    >
                      <div className="flex gap-4">
                        <div
                          style={{
                            backgroundImage: `url(${item.pictureUrl})`,
                          }}
                          className="aspect-square h-12 rounded-lg bg-cover bg-center flex-shrink-0"
                        ></div>
                        <div className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-text text-sm font-extrabold">
                              {item.title}
                            </span>
                            <SaveIcon
                              className={`group-hover:visible stroke-primary h-[14px] ${
                                selectedRecommendations.includes(item.uid)
                                  ? "visible fill-primary"
                                  : "invisible"
                              }`}
                              fill={
                                selectedRecommendations.includes(item.uid)
                                  ? true
                                  : false
                              }
                            />
                          </div>
                          <div className="line-clamp-3 text-intratext text-[13px] font-medium">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button onClick={closeRecommendations} className="mt-auto btn-2">
              Começar!
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
