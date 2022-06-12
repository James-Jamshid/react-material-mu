import React from "react";
import PrimarySearchAppBar from "./MaterialMuPage/AppBar";
import bg from "../assets/bg.png";

import ComboBox from "./MaterialMuPage/Searchbar";
import ButtonBases from "./MaterialMuPage/PictureChoice";

const NavbarPage = () => {
  return (
    <div className=" flex w-full flex-col bg-[#171836] ">
      <div className="flex bg-[#171836]">
        <PrimarySearchAppBar />
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex">
          <img src={bg} alt="" className="flex w-[600px] h-[600px]" />
        </div>
        <div className="flex flex-col pt-5 gap-y-5">
          <h1>
            Grow Your Skills <br /> To Advance Your <br /> Career Path.
          </h1>
          <p>We have something big for you who want to level up!</p>
          <ComboBox />
          <p>Suggestions:</p>
          <div className="flex">
            <ButtonBases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
