import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {}

const Layout = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
