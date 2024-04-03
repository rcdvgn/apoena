import React from "react";

import {
  TagIcon,
  PinIcon,
  SupportersIcon,
  MoreIcon,
  HeartIcon,
  CreatedInIcon,
  InfoIcon,
} from "../_icons/icons";

interface Campaign {
  pictureUrl: string;
  additionalPhotos: string[];
  ownerPictureUrl: string;
  title: string;
  description: string;
  createdIn: string;
  owner: string;
  isAd: boolean;
  isLiked: boolean;
  isOwnerVerified: boolean;
  type: string;
  affectedRegion: string;
  supporters: number;
  goal: number;
  raised: number;
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="container h-auto p-6">
      <div className="flex">
        <span className="text-primary">
          <TagIcon className="fill-primary h-4" />
          {campaign.type}
        </span>

        {campaign.affectedRegion}
        {campaign.supporters}
        <div>
          {campaign.raised}
          {campaign.goal}
        </div>
      </div>
      <div>
        <div>
          <img src={campaign.pictureUrl} alt="Campaign Picture" />
        </div>
        <div>
          {campaign.title}
          <div>
            <img src={campaign.ownerPictureUrl} alt="" />

            {campaign.owner}
          </div>
        </div>
        <div>
          <button>More</button>
          <button>{campaign.isLiked ? 1 : 0}</button>
          <button>Contribuir</button>
        </div>
      </div>
      <div>
        <div>{campaign.description}</div>
        <div>{campaign.additionalPhotos.length}</div>
      </div>
      <div>
        <div>{campaign.createdIn}</div>
        <div>{campaign.isAd ? "Ad" : ""}</div>
      </div>
    </div>
  );
}
