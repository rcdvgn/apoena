"use client";

import React, { useRef, useState, useEffect } from "react";

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
  const [fundsBarWidth, setFundsBarWidth] = useState(0);

  const fundsBar = useRef<HTMLDivElement>(null);

  const limitDescription = (desc: string) => {
    return desc.substring(0, 210) + "...";
  };

  useEffect(() => {
    const updateFundsBarWidth = () => {
      if (fundsBar.current) {
        setFundsBarWidth(fundsBar.current.offsetWidth);
      }
    };

    updateFundsBarWidth();

    window.addEventListener("resize", updateFundsBarWidth);

    return () => {
      window.removeEventListener("resize", updateFundsBarWidth);
    };
  }, []);

  return (
    <div className="container h-auto p-6 w-[45rem]">
      <div className="flex justify-start gap-4 mb-6">
        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <PinIcon className="fill-primary h-3" />
          {campaign.affectedRegion}
        </span>

        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <TagIcon className="fill-primary h-3" />
          {campaign.type}
        </span>

        <span className="flex items-center gap-1 text-primary font-semibold text-xs">
          <SupportersIcon className="fill-primary h-3" />
          {campaign.supporters}
        </span>
        <div
          ref={fundsBar}
          className="relative bg-faded-primary rounded-full grow font-medium text-foreground text-[11px]"
        >
          <div
            style={{
              width: `${(campaign.raised * fundsBarWidth) / campaign.goal}px`,
            }}
            className="h-full rounded-full left-0 bg-primary "
          ></div>
          <span className="absolute h-full w-full text-center top-0 left-0">
            ${campaign.raised} / ${campaign.goal}
          </span>
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
          <div className="flex items-center gap-1.5 mt-1.5">
            <div
              style={{ backgroundImage: `url(${campaign.ownerPictureUrl})` }}
              className="h-7 w-7 rounded-full bg-cover bg-center flex-shrink-0"
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
          <button className="bg-primary text-foreground text-sm font-semibold rounded-lg px-8 h-full hover:opacity-[0.8]">
            Contribuir
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="font-semibold text-xs text-text leading-6 line-clamp-2">
          {campaign.description}
        </div>
        <div className="px-4 flex">
          {campaign.additionalPhotos.map((photo, index) => {
            if (index < 2) {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${photo})` }}
                  className="mr-[-1.5rem] rounded-md h-12 w-12 bg-cover bg-center flex-shrink-0 border-2 border-foreground"
                ></div>
              );
            } else if (index === 2) {
              return (
                <div
                  key={index}
                  className="grid place-items-center rounded-md h-12 w-12 bg-secondary bg-center flex-shrink-0 border-2 border-foreground"
                >
                  <span className="font-semibold text-subtext text-lg">
                    +{campaign.additionalPhotos.length - 2}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <div>{campaign.createdIn}</div>
        <div>{campaign.isAd ? "Ad" : ""}</div>
      </div>
    </div>
  );
}
