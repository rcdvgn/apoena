import React from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

import { campaigns } from "./data";

export default function Feed() {
  return (
    <div className="max-w-[70rem] p-global-spacing">
      <Filters />
      <div className="flex items-start justify-between gap-global-spacing">
        <div className="flex grow flex-col gap-global-spacing">
          {campaigns.map((item, index) => {
            return <CampaignCard key={index} campaign={item} />;
          })}
        </div>
        <CampaignDetails />
      </div>
    </div>
  );
}
