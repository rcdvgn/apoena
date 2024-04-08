import React from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

import { campaigns } from "./data";

export default function Feed() {
  return (
    <div className="px-global-spacing">
      <Filters />
      <div className="flex gap-global-spacing">
        <div className="flex flex-col gap-global-spacing">
          {campaigns.map((item, index) => {
            return <CampaignCard key={index} campaign={item} />;
          })}
        </div>
        <div className="w-[30rem] h-auto border-2 border-red-500">
          {/* <CampaignDetails /> */}
        </div>
      </div>
    </div>
  );
}
