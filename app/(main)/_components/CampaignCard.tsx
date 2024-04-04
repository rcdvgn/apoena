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
      <div className="flex justify-start gap-4 mb-6">
        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <TagIcon className="fill-primary h-3" />
          {campaign.type}
        </span>

        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <PinIcon className="fill-primary h-3" />
          {campaign.affectedRegion}
        </span>

        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <SupportersIcon className="fill-primary h-3" />
          {campaign.supporters}
        </span>
        <div className="grid place-items-center bg-primary rounded-full grow font-medium text-foreground text-[11px]">
          ${campaign.raised} / ${campaign.goal}
        </div>
      </div>
      <div className="flex items-start gap-4 mb-4">
        <div
          style={{ backgroundImage: `url(${campaign.pictureUrl})` }}
          className="rounded-lg h-16 w-16 bg-cover bg-center flex-shrink-0"
        ></div>
        <div>
          <span className="text-base font-semibold text-text">
            {campaign.title}
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <div
              style={{ backgroundImage: `url(${campaign.ownerPictureUrl})` }}
              className="h-7 w-7 rounded-full bg-cover bg-center border-2 flex-shrink-0"
            ></div>
            <span className="font-semibold text-xs text-text">
              {campaign.owner}
            </span>
          </div>
        </div>
        <div className="flex ml-auto gap-2 h-11">
          {/* <button className="grid place-items-center h-10 w-10 bg-secondary rounded-lg ">
            <MoreIcon className="fill-subtext w-5" />
          </button> */}
          <button className="group grid place-items-center h-full w-11 bg-secondary rounded-lg">
            <HeartIcon className="stroke-subtext stroke-2 w-5 group-hover:stroke-like group-hover:fill-like" />
          </button>
          <button className="bg-primary text-foreground text-sm font-semibold rounded-lg px-6 h-full hover:opacity-[0.8]">
            Contribuir
          </button>
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
