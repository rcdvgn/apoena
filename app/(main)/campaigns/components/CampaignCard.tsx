"use client";

import React, { useRef, useState, useEffect } from "react";

import {
  TagIcon,
  PinIcon,
  SupportersIcon,
  CreatedInIcon,
  InfoIcon,
  FullScreenIcon,
  CurrencyIcon,
  AdIcon,
  HeartIcon,
  CommentIcon,
  SaveIcon,
  ShareIcon,
  MoreIcon,
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

  const limitDescription = (description: string) => {
    return description.substring(0, 150) + "...";
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

  const CampaignLabel = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: any;
  }) => {
    return (
      <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 flex-shrink-0">
        {icon}
        <span className="text-primary font-bold text-xs">{text}</span>
      </div>
    );
  };

  return (
    <div ref={fundsBar} className="container h-auto w-full">
      <div className="flex items-center h-[65px] px-4 py-3 ">
        <div
          style={{ backgroundImage: `url(${campaign.pictureUrl})` }}
          className="group relative mr-4 rounded-lg h-full aspect-square bg-cover bg-center flex-shrink-0 overflow-hidden cursor-pointer"
        >
          <div className="bg-black/30 h-full w-full top-0 left-0 absolute grid place-items-center invisible group-hover:visible">
            <FullScreenIcon className="fill-foreground h-5" />
          </div>
        </div>
        <div className="font-semibold text-[15px] text-text min-w-0 line-clamp-2 mr-5">
          {campaign.title}
        </div>
        <button className="bg-primary px-[15px] py-2.5 rounded-full font-bold text-sm text-foreground ml-auto">
          Contribuir
        </button>
      </div>
      <div className="h-[2px] bg-primary/30 rounded-full">
        <div
          style={{
            width: `${(campaign.raised * fundsBarWidth) / campaign.goal}px`,
          }}
          className="h-full bg-primary rounded-full"
        ></div>
      </div>
      <div className="relative h-[4rem] overflow-hidden mx-4">
        <div className="absolute left-0 top-0 bottom-0 h-full min-w-full flex gap-3 justify-between items-center">
          <CampaignLabel
            icon={
              <CurrencyIcon className="fill-primary h-[14px] flex-shrink-0" />
            }
            text={`R$${Intl.NumberFormat("pt-BR", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(campaign.raised)} / R$${Intl.NumberFormat("pt-BR", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(campaign.goal)}`}
          />
          <CampaignLabel
            icon={<PinIcon className="fill-primary h-[14px] flex-shrink-0" />}
            text={campaign.affectedRegion}
          />
          <CampaignLabel
            icon={<TagIcon className="fill-primary h-[14px] flex-shrink-0" />}
            text={campaign.type}
          />
          <CampaignLabel
            icon={
              <SupportersIcon className="fill-primary h-[14px] flex-shrink-0" />
            }
            text={campaign.supporters}
          />
        </div>
      </div>
      <div className="flex px-4 p-2 gap-4">
        <div className="text-[13px] leading-6">
          <span className="line-clamp-3 font-semibold text-text">
            {limitDescription(campaign.description) + " "}
            <span className="hover:underline text-primary font-bold cursor-pointer">
              Ler mais
            </span>
          </span>
        </div>
        <div className="flex">
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
                  className="grid place-items-center rounded-md h-12 w-12 bg-secondary bg-center flex-shrink-0 border-2 border-foreground font-semibold text-substext text-md"
                >
                  +{campaign.additionalPhotos.length - 2}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <div
              style={{ backgroundImage: `url(${campaign.ownerPictureUrl})` }}
              className="rounded-full h-7 w-7 bg-cover bg-center flex-shrink-0"
            ></div>
            <span className="text-text font-semibold text-xs">
              {campaign.owner}
            </span>
          </div>
          <span className=""></span>
        </div>
        {campaign.isAd ? (
          <div className="bg-secondary p-1 rounded-[3px] flex items-center gap-1">
            <AdIcon className="fill-subtext h-2.5" />
            <span className="text-subtext font-semibold text-[10px]">
              Anuncio
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-between border-t-2 border-background px-4 py-2">
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="text-xs font-bold text-like">24</span>
          <div className="group relative grid place-items-center h-8 w-8 cursor-pointer">
            <div className="transition-all absolute aspect-square h-0 top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-like/10 group-hover:h-full"></div>
            <HeartIcon className="fill-like h-3 overflow-visible" />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="text-xs font-bold text-comment">24</span>
          <div className="group relative grid place-items-center h-8 w-8 cursor-pointer">
            <div className="transition-all absolute aspect-square h-0 top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-comment/10 group-hover:h-full"></div>
            <CommentIcon className="fill-comment h-3" />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="text-xs font-bold text-save">24</span>
          <div className="group relative grid place-items-center h-8 w-8 cursor-pointer">
            <div className="transition-all absolute aspect-square h-0 top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-save/10 group-hover:h-full"></div>
            <SaveIcon className="fill-save h-3" />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="text-xs font-bold text-share">24</span>
          <div className="group relative grid place-items-center h-8 w-8 cursor-pointer">
            <div className="transition-all absolute aspect-square h-0 top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-share/10 group-hover:h-full"></div>
            <ShareIcon className="fill-share h-3" />
          </div>
        </div>

        <div className="group relative grid place-items-center h-8 w-8 cursor-pointer">
          <div className="transition-all absolute aspect-square h-0 top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-subtext/10 group-hover:h-full"></div>
          <MoreIcon className="fill-subtext w-4" />
        </div>
      </div>
    </div>
  );
}
