import React from "react";

export const TestingQuestions = ({ content, uid }) => {
  return (
    <div
      className={` flex-col items-end rounded-lg w-max px-4 py-2 border-2 ${
        content ? "flex" : "hidden"
      }`}
    >
      {content.questionTo && (
        <span className=" text-white text-[1rem]">{`@ ${content.questionTo}`}</span>
      )}
      <div className=" flex flex-col items-end gap-1 rounded-lg text-white">
        <p className=" text-right max-w-[350px] ">
          <span className=" text-[1.2rem] ">{content.question}</span>
        </p>
        <span className=" text-[0.8rem] italic text-white">
          {content.name && content.name}
        </span>
      </div>
    </div>
  );
};
export const TestingPledges = ({ content, uid }) => {
  return (
    <div
      className={` flex-col items-end rounded-lg w-max px-4 py-2 border-2 ${
        content.name ? "flex" : "hidden"
      }`}
    >
      {content.pledgeType && (
        <span className=" text-white text-[1.2rem] font-bold ">{`${content.pledgeType}`}</span>
      )}
      <div className=" flex flex-col items-end gap-1 rounded-lg text-white">
        <p className=" text-right max-w-[350px] ">
          <span className=" text-[1.2rem] ">{content.pledge}</span>
        </p>
        <span className=" text-[0.8rem] italic text-white">
          {content.name && content.name}
        </span>
      </div>
    </div>
  );
};
export const TestingComment = ({ content, uid }) => {
  return (
    <div
      className={` flex-col items-end rounded-lg w-max px-4 py-2 border-2 ${
        content.name && content.questionTo ? "flex" : "hidden"
      }`}
    >
      <div className=" flex flex-col items-end gap-1 rounded-lg text-white">
        <p className=" text-right max-w-[350px] ">
          <span className=" text-[1.2rem] ">{content.questionTo}</span>
        </p>
        <span className=" text-[0.8rem] italic text-white">
          {content.name && content.name}
        </span>
      </div>
    </div>
  );
};
export const TestingReaction = ({ content, uid }) => {
  return (
    <div
      className={` flex-col gap-2 w-max ${
        content.emojiReaction ? "flex" : "hidden"
      }`}
    >
      <div className=" flex flex-col items-end gap-1 rounded-lg  text-white">
        <p className=" ">
          {content.emojiReaction && (
            <>
              {/* <span className=" text-[5rem]">{content.emojiReaction}</span> */}
              {content.emojiReaction === "👍🏻" ? (
                <img
                  src="/emote/thumbs up.webp"
                  className=" max-w-[100px]"
                  alt=""
                />
              ) : content.emojiReaction === "😂" ? (
                <img src="/emote/lol.webp" className=" max-w-[100px]" alt="" />
              ) : content.emojiReaction === "❤️" ? (
                <img
                  src="/emote/heart.webp"
                  className=" max-w-[100px]"
                  alt=""
                />
              ) : content.emojiReaction === "😁" ? (
                <img
                  src="/emote/smiling.webp"
                  className=" max-w-[100px]"
                  alt=""
                />
              ) : content.emojiReaction === "👏🏻" ? (
                <img
                  src="/emote/clapping.webp"
                  className=" max-w-[100px]"
                  alt=""
                />
              ) : (
                ""
              )}
            </>
          )}
        </p>
        <span className=" text-[0.8rem] italic text-white">{content.name}</span>
      </div>
    </div>
  );
};
