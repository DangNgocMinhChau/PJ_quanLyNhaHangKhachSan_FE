import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";
import MenuLeft from "./MenuLeft";
function Page(props) {
  return (
    <div id="page-top">
      <div id="wrapper">
        <MenuLeft />
        <Nav />
      </div>
    </div>
  );
}

export default Page;
