import { PATHNAME } from "./Pathname";
import Login from "../pages/Login";
import { TRouterList } from "../models";

export const routerList: TRouterList[] = [
  {
    path: PATHNAME.HOME,
    component: Login,
  },
];
