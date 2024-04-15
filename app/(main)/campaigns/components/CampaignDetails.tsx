"use client";

import React, { useState } from "react";

export default function CampaignDetails({ campaign }: any) {
  const [selectedTab, setSelectedTab] = useState({
    details: false,
    comments: true,
  });

  const handleTabChange = (tab: any) => {
    setSelectedTab({
      details: tab === "details",
      comments: tab === "comments",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 container shadow-sm p-4">
        <div className="">
          <div className="hover:underline text-primary font-bold cursor-pointer text-xs pb-4">
            Ver publicação original
          </div>
          <div className="flex">
            <div
              style={{ backgroundImage: `url(${campaign.pictureUrl})` }}
              className="relative mr-4 rounded-lg h-16 aspect-square bg-cover bg-center flex-shrink-0"
            ></div>
            <div className="font-extrabold text-xl text-text">
              {campaign.title}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=""></div>
          <div className="">
            <button className="btn-2">Contribuir</button>
          </div>
        </div>
      </div>
      <div className="container shadow-sm w-full grow">
        <div className="flex border-b-2 border-background h-20">
          <span
            onClick={() => handleTabChange("details")}
            className={`grow grid place-items-center border-b-2 border-transparent hover:border-primary mb-[-2px] cursor-pointer text-sm font-bold ${
              selectedTab.details
                ? "border-primary mb-[-2px] text-primary"
                : "text-subtext"
            }`}
          >
            Detalhes
          </span>
          <span
            onClick={() => handleTabChange("comments")}
            className={`grow grid place-items-center border-b-2 border-transparent hover:border-primary mb-[-2px] cursor-pointer text-sm font-bold ${
              selectedTab.comments
                ? "border-primary mb-[-2px] text-primary"
                : "text-subtext"
            }`}
          >
            Comentarios
          </span>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
