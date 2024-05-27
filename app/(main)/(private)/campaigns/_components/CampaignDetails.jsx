"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";

import { usePaymentModal } from "../../../../_contexts/PaymentContext";

import useAutosizeTextArea from "../../../../_utils/useAutosizeTextArea";

import { createComment, getComments } from "../../../../_actions/actions";

import { useAuth } from "../../../../_contexts/AuthContext";

// import { comments } from "../data";

import { HeartIcon } from "../../../../_components/icons";

const CommentsTab = ({
  campaign,
  setSelectedCampaign,
  // campaigns,
  // setCampaigns,
}) => {
  const { user } = useAuth();

  const newCommentInput = useRef(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useAutosizeTextArea(newCommentInput.current, newComment);

  const handleNewCommentChange = (e) => {
    setNewComment(e.target?.value);
  };

  const handleNewComment = async (e) => {
    e.preventDefault();

    if (newComment.length) {
      const createdComment = await createComment(
        newComment,
        user.uid,
        campaign.uid
      );

      setComments([
        {
          ...createdComment,
          userName: user.displayName,
          userPictureUrl: user.pictureUrl,
        },
        ...comments,
      ]);
      setNewComment("");

      // const updatedCampaign = {
      //   ...campaign,
      //   data: { ...campaign.data, comments: updatedComments },
      // };

      // const updatedCampaigns = campaigns.map((item) => {
      //   if (item.uid === campaign.uid) {
      //     return updatedCampaign;
      //   } else {
      //     return item;
      //   }
      // });

      // setSelectedCampaign(updatedCampaign);
      // setCampaigns(updatedCampaigns);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await getComments(campaign.uid);
      setComments(commentsData);
    };
    fetchComments();
  }, [campaign]);

  return (
    <>
      <div className="flex flex-col gap-4 pt-4 px-4 grow">
        {comments.length
          ? comments.map((comment, index) => {
              return (
                <div className="flex gap-2" key={index}>
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `url(${comment.userPictureUrl})`,
                      }}
                      className="h-8 aspect-square bg-cover bg-center flex-shrink-0 rounded-full"
                    ></div>
                  </div>
                  <div
                    className={`w-full ${
                      index !== comments.length - 1
                        ? "border-b-[1px] border-secondary"
                        : ""
                    } pb-2`}
                  >
                    <div className="text-[13px] font-bold text-text">
                      {comment.userName}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[13px] font-medium text-text">
                        {comment.body}
                      </span>
                      <div className="group flex flex-col justify-center items-center gap-[2px] ml-2 cursor-pointer">
                        <div className="z-0 relative">
                          <div className="group-hover:visible invisible z-[-1] absolute hvr-1 rounded-full h-10 w-10 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"></div>
                          <HeartIcon className="fill-like h-3" />
                        </div>

                        <span className="text-like font-medium text-[11px]">
                          {comment.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <form
        onSubmit={handleNewComment}
        className="bottom-0 sticky border-t-[1px] border-secondary bg-foreground p-4 flex items-center gap-2"
      >
        <div
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2021/04/05/12/38/man-6153295_1280.jpg")`,
          }}
          className="mb-auto h-8 aspect-square bg-cover bg-center flex-shrink-0 rounded-full"
        ></div>
        <textarea
          className="border-none resize-none overflow-y-scroll px-0 outline-none grow text-[13px] font-medium text-text"
          spellCheck="false"
          ref={newCommentInput}
          onChange={handleNewCommentChange}
          value={newComment}
          rows={1}
          placeholder="Entre na discussão"
        ></textarea>
        <button
          type="submit"
          className={`ml-2 font-bold text-[13px] bg-transparent outline-none ${
            newCommentInput.current && newCommentInput.current.value.length > 0
              ? "cursor-pointer text-primary hover:underline"
              : "text-primary/70 cursor-not-allowed"
          }`}
        >
          Postar
        </button>
      </form>
    </>
  );
};

const CampaignDetails = ({
  campaign,
  setSelectedCampaign,
  // campaigns,
  // setCampaigns,
}) => {
  const { openPaymentModal } = usePaymentModal();

  // const newCommentInput = useRef(null);
  const tabs = ["Details", "Comments"];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleContribute = () => {
    openPaymentModal("Campanha teste");
  };

  return (
    <>
      <div className="flex flex-col gap-4 container shadow-sm p-4">
        <div className="">
          <div className="hover:underline text-primary font-bold cursor-pointer text-xs pb-4">
            Ver publicação original
          </div>
          <div className="flex">
            <div
              style={{ backgroundImage: `url(${campaign.pictureUrl})` }}
              className="relative mr-4 rounded-lg h-16 aspect-square bg-cover bg-center flex-shrink-0"
            ></div>
            <div className="font-extrabold text-xl text-text">
              {campaign.title}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=""></div>
          <div className="">
            <button onClick={handleContribute} className="btn-2">
              Contribuir
            </button>
          </div>
        </div>
      </div>
      <div className="container shadow-sm w-full grow min-h-0 flex flex-col">
        <div className="flex border-b-2 border-background min-h-20 h-20">
          <span
            onClick={() => setSelectedTab(0)}
            className={`grow grid place-items-center border-b-2 hover:border-primary mb-[-2px] cursor-pointer text-[13px] font-bold hover:text-primary ${
              selectedTab === 0
                ? "border-primary text-primary"
                : "text-text/50 border-transparent"
            }`}
          >
            Detalhes
          </span>
          <span
            onClick={() => setSelectedTab(1)}
            className={`grow grid place-items-center border-b-2 hover:border-primary mb-[-2px] cursor-pointer text-[13px] font-bold hover:text-primary ${
              selectedTab === 1
                ? "border-primary text-primary"
                : "text-text/50 border-transparent"
            }`}
          >
            Comentarios
          </span>
        </div>
        <div className="flex flex-col grow min-h-0 overflow-auto rounded-b-2xl">
          {/* <div className={selectedTab === 0 ? "hidden" : ""}> */}
          <CommentsTab
            campaign={campaign}
            setSelectedCampaign={setSelectedCampaign}
            // campaigns={campaigns}
            // setCampaigns={setCampaigns}
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
