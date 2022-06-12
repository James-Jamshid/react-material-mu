import React from "react";
import Child from "./components/HomePage/ChildPage/Child";
import Family from "./components/HomePage/Family.jsx/Family";
import Footer from "./components/HomePage/FooterPage/Footer";
import NavbarPage from "./components/HomePage/NavbarPage/NavbarPage";

const Main = () => {
  return (
    <div>
      <NavbarPage />
      <Family />
      <Child />
      <Footer />
    </div>
  );
};

export default Main;
