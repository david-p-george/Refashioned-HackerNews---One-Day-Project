import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

// The children props comes from _app.js.
const Layout = ({ children }) => {
  return (
    <div className="w-full lg:w-3/6 lg:absolute top-[50px] left-[25%] 2xl:left-[25%] md:w-4/6 md:absolute md:left-[20%] h-fit">
      <Navbar />
      <main>{children}</main> // I have used one of the semantic tags 'main'
      instead of div to favour bots.
      <Footer />
    </div>
  );
};

export default Layout;
