import React from "react";

import Filters from "./components/Filters";
import CampaignCard from "./components/CampaignCard";
import CampaignDetails from "./components/CampaignDetails";

import { campaigns } from "./data";

export default function Campaigns() {
  return (
    <div className="px-global-spacing w-full max-w-[65rem]">
      <Filters />
      <div className="flex gap-global-spacing">
        <div className="flex flex-col grow gap-global-spacing">
          {campaigns.map((item, index) => {
            return <CampaignCard key={index} campaign={item} />;
          })}
        </div>
        <div className="flex-shrink-0 w-[20rem] h-auto">
          <CampaignDetails />
        </div>
      </div>
    </div>
  );
}
