import React from "react";

import Filters from "./_components/Filters";
import CampaignCard from "./_components/CampaignCard";
import CampaignDetails from "./_components/CampaignDetails";

export default function Feed() {
  return (
    <div className="">
      <Filters />
      <div className="flex items-start justify-between gap-global-spacing p-global-spacing">
        <div className="flex grow flex-col gap-global-spacing">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>

        <CampaignDetails />
      </div>
    </div>
  );
}
