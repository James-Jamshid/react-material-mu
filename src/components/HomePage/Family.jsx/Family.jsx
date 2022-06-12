import React from "react";
import ImageAvatars from "./MaterialMUPage/Avatar1";
import ColorButtons from "./MaterialMUPage/ButtonPage";
import marketing from "../assets/marketing.png";
import IconAvatars from "./MaterialMUPage/FaylPage";

import CustomizedButtons from "./MaterialMUPage/ButtonBottom";

const Family = () => {
  return (
    <div className="flex bg-[#171836] flex-col items-center justify-center gap-y-10">
      <div className="flex">
        <h1>What Do You Want to Learn?</h1>
      </div>
      <div className="flex">
        <p>Choose the right class as you need. Then enjoy studying.</p>
      </div>

      {/* Four borders in the middle....................start */}
      <div className="flex items-center gap-x-3">
        <div className="flex flex-col border gap-y-3 rounded-[20px] bg-[#323359] w-[250px] h-[485px] p-5">
          <img src={marketing} alt="" className="flex" />
          <button
            id="FamilyBtn"
            className="flex rounded-xl items-center justify-center"
          >
            20 videos
          </button>
          <h4>Digital Marketing Strategy</h4>
          <div className="flex">
            <p className=" text-[12px]">
              This course aims to give you deeper <br /> understanding of core
              processes ...
            </p>
          </div>
          <div className="flex items-center gap-x-2 ">
            <ImageAvatars />
            <div className="flex flex-col">
              <h4>Joey Pier</h4>
              <p className="text-[12px]">Mentor</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <ColorButtons />
            <IconAvatars />
          </div>
        </div>

        <div className="flex flex-col border gap-y-3 rounded-[20px] bg-[#323359] w-[250px] h-[485px] p-5">
          <img src={marketing} alt="" className="flex" />
          <button
            id="FamilyBtn"
            className="flex rounded-xl items-center justify-center"
          >
            20 videos
          </button>
          <h4>Digital Marketing Strategy</h4>
          <div className="flex">
            <p className=" text-[12px]">
              This course aims to give you deeper <br /> understanding of core
              processes ...
            </p>
          </div>
          <div className="flex items-center gap-x-2 ">
            <ImageAvatars />
            <div className="flex flex-col">
              <h4>Joey Pier</h4>
              <p className="text-[12px]">Mentor</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <ColorButtons />
            <IconAvatars />
          </div>
        </div>

        <div className="flex flex-col border gap-y-3 rounded-[20px] bg-[#323359] w-[250px] h-[485px] p-5">
          <img src={marketing} alt="" className="flex" />
          <button
            id="FamilyBtn"
            className="flex rounded-xl items-center justify-center"
          >
            20 videos
          </button>
          <h4>Digital Marketing Strategy</h4>
          <div className="flex">
            <p className=" text-[12px]">
              This course aims to give you deeper <br /> understanding of core
              processes ...
            </p>
          </div>
          <div className="flex items-center gap-x-2 ">
            <ImageAvatars />
            <div className="flex flex-col">
              <h4>Joey Pier</h4>
              <p className="text-[12px]">Mentor</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <ColorButtons />
            <IconAvatars />
          </div>
        </div>

        <div className="flex flex-col border gap-y-3 rounded-[20px] bg-[#323359] w-[250px] h-[485px] p-5">
          <img src={marketing} alt="" className="flex" />
          <button
            id="FamilyBtn"
            className="flex rounded-xl items-center justify-center"
          >
            20 videos
          </button>
          <h4>Digital Marketing Strategy</h4>
          <div className="flex">
            <p className=" text-[12px]">
              This course aims to give you deeper <br /> understanding of core
              processes ...
            </p>
          </div>
          <div className="flex items-center gap-x-2 ">
            <ImageAvatars />
            <div className="flex flex-col">
              <h4>Joey Pier</h4>
              <p className="text-[12px]">Mentor</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <ColorButtons />
            <IconAvatars />
          </div>
        </div>
      </div>
      {/* Four borders in the middle....................end */}
      <div className="flex">
        <CustomizedButtons />
      </div>
    </div>
  );
};

export default Family;
