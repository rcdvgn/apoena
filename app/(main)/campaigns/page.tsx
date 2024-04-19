"use client";

import React, { useState } from "react";

import Filters from "./components/Filters";
import CampaignCard from "./components/CampaignCard";
import CampaignDetails from "./components/CampaignDetails";

import { campaigns } from "./data";

export default function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(campaigns[0]);

  return (
    <div className="px-8 w-full max-w-[78rem]">
      <Filters />
      <div className="flex gap-4 pb-4">
        <div className="flex flex-col min-w-[30rem] w-[30rem] gap-4 pt-4">
          {campaigns.map((item, index) => {
            return (
              <CampaignCard
                key={index}
                campaign={item}
                setSelectedCampaign={setSelectedCampaign}
              />
            );
          })}
        </div>
        <div className="flex-shrink-1 grow h-auto">
          <div className="flex flex-col gap-4 pt-4 h-[calc(100vh-1rem)] sticky top-0">
            <CampaignDetails campaign={selectedCampaign} />
          </div>
        </div>
      </div>
    </div>
  );
}
