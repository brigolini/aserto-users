import React from "react";
import {RouteChildrenProps} from "react-router-dom";

const UserList = React.lazy(
  () =>
    import(
      "../pages/UserList/UserList"
      )
);

const UserDetails = React.lazy(
  () =>
    import(
      "../pages/UserDetails/UserDetails"
      )
);

export type RouteDefinition = {
  exact: boolean;
  component: React.ComponentType<any | RouteChildrenProps>;
  path: string;
};

const definitions: RouteDefinition[] = [
  {
    exact: true,
    component: UserList,
    path: "/users/:token?",
  },
  {
    exact: true,
    component: UserList,
    path: "/",
  },
  {
    exact: true,
    component: UserDetails,
    path: "/user/:userId",
  },
];

export default definitions;
