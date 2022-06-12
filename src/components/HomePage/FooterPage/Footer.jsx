import React from "react";
import TransitionGroupExample from "./MaterialMu/AddToBasket";
import SimpleDialogDemo from "./MaterialMu/Dialog";
import TemporaryDrawer from "./MaterialMu/Drawer";
import IconTabs from "./MaterialMu/IconTabs";
import AccountMenu from "./MaterialMu/Menu";
import CustomizedSnackbars from "./MaterialMu/Snakbars";
import PlaygroundSpeedDial from "./MaterialMu/Stepper";
import NestedModal from "./MaterialMu/Transitions";
import RichObjectTreeView from "./MaterialMu/Treeview";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="flex bg-[#424345]  justify-between p-10">
      <div className="flex  flex-col items-center gap-y-5">
        <div className="flex items-center w-[100%] justify-center bg-[#6db6f2] rounded-lg">
          <RichObjectTreeView />
        </div>
        <div className="flex  w-[100%] items-center justify-center pt-4 hover:bg-[#6db6f2] rounded-lg">
          <TransitionGroupExample />
        </div>
        <div className="flex items-center justify-center bg-[#6db6f2] rounded-lg">
          <NestedModal />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <div className="flex flex-col items-center w-[100%] justify-center bg-[#6db6f2] rounded-lg">
          <AccountMenu />
          <IconTabs />
        </div>
        <CustomizedSnackbars />
        <SimpleDialogDemo />

        <div className="flex">
          <TemporaryDrawer />
        </div>
      </div>

      <div className="flex justify-between flex-col p-3">
        <img id="icons" src={facebook} alt="" className="flex w-[20px]" />

        <img id="icons" src={twitter} alt="" className="flex w-[20px]" />

        <img id="icons" src={instagram} alt="" className="flex w-[20px]" />

        <div className="flex">
          <PlaygroundSpeedDial />
        </div>
      </div>
    </div>
  );
};

export default Footer;
