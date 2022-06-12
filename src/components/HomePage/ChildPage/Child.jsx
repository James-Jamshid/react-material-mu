import React from "react";
import image from "../assets/ChildImg.png";
import star from "../assets/star.png";
import key from "../assets/key.png";
import crown from "../assets/crown.png";

import ListDividers from "./MaterialMuPage/DividerButtons";
import FontAwesomeIconSize from "./MaterialMuPage/CallMe";
import SimpleBackdrop from "./MaterialMuPage/Backdrop";
import ScrollDialog from "./MaterialMuPage/ScrollDown";
import CircularIntegration from "./MaterialMuPage/AcceptTerms";

const Child = () => {
  return (
    <div className="flex items-center flex-col bg-[#171836] pt-20 pb-20">
      <div className="flex">
        <img src={image} alt="" className="flex cursor-pointer" />
      </div>
      {/* Course Pricing ----------------------------------start */}
      <div className="flex items-center flex-col gap-y-5">
        <h1 className="flex">Course Pricing</h1>
        <p className="flex">Choose pricing that suits to your need.</p>
        <div className="flex items-center gap-x-5">
          <div className="flex flex-col  items-center p-2 bg-[#323359] rounded-[20px] w-[320px]">
            <div className="flex gap-x-3 items-center">
              <div className="flex  rounded-lg hover:bg-[green]">
                <img src={star} alt="" className="flex" />
              </div>
              <h4>Free</h4>
            </div>

            <ListDividers />

            <div className="flex  items-center">
              <FontAwesomeIconSize />
              <SimpleBackdrop />
            </div>
          </div>
          <div className="flex flex-col  items-center p-2 bg-[#323359] rounded-[20px] w-[320px]">
            <div className="flex gap-x-3 items-center">
              <div className="flex  rounded-lg hover:bg-[green]">
                <img src={key} alt="" className="flex" />
              </div>
              <h4>Express</h4>
            </div>

            <ListDividers />

            <div className="flex  items-center">
              <FontAwesomeIconSize />
              <ScrollDialog />
            </div>
          </div>
          <div className="flex flex-col  items-center p-2 bg-[#323359] rounded-[20px] w-[320px]">
            <div className="flex gap-x-3 items-center">
              <div className="flex  rounded-lg hover:bg-[green]">
                <img src={crown} alt="" className="flex" />
              </div>
              <h4>Premium</h4>
            </div>

            <ListDividers />

            <div className="flex  items-center">
              <FontAwesomeIconSize />
              <CircularIntegration />
            </div>
          </div>
        </div>
      </div>
      {/* Course Pricing ----------------------------------end */}
    </div>
  );
};

export default Child;
