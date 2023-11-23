import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const Layout = (props: Props) => {
  const {} = props;
  React.useEffect(() => {}, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
