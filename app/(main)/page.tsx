import React from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

import { campaigns } from "./data";

export default function Feed() {
  return (
    <div className="px-global-spacing w-full max-w-[65rem] border-2 border-yellow-500">
      <Filters />
      <div className="flex items-start gap-global-spacing">
        <div className="flex flex-col grow gap-global-spacing">
          {campaigns.map((item, index) => {
            return <CampaignCard key={index} campaign={item} />;
          })}
        </div>
        <div className="w-[20rem] border-2 border-red-500">
          <CampaignDetails />
        </div>
      </div>
    </div>
  );
}
