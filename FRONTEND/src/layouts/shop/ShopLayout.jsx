import React from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import { Outlet } from "react-router";

const ShopLayout = () => {
  return (
    <div>
      <ShopNavbar />
      <Outlet />
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
