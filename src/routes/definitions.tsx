import React from "react";
import { RouteChildrenProps } from "react-router-dom";

const UserList = React.lazy(
  () =>
    import(
      "../pages/UserList"
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
];

export default definitions;
