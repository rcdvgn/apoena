"use client";

import React, { useState, useEffect } from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

import { getCampaigns } from "@/app/_actions/actions";

// import { campaigns } from "./data";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<any>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaignsData = await getCampaigns();
        setCampaigns(campaignsData);
        console.log(campaignsData);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    campaigns ? setSelectedCampaign(campaigns[0].data) : "";
  }, [campaigns]);

  return (
    <div className="px-8 w-full max-w-[78rem]">
      <Filters />
      <div className="flex gap-4 pb-4">
        <div className="flex flex-col min-w-[30rem] w-[30rem] gap-4 pt-4">
          {campaigns
            ? campaigns.map((item: any, index: any) => {
                return (
                  <CampaignCard
                    key={index}
                    campaign={item.data}
                    setSelectedCampaign={setSelectedCampaign}
                  />
                );
              })
            : ""}
        </div>
        <div className="flex-shrink-1 grow h-auto">
          <div className="flex flex-col gap-4 pt-4 h-[calc(100vh-1rem)] sticky top-0">
            {selectedCampaign && (
              <CampaignDetails campaign={selectedCampaign} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
