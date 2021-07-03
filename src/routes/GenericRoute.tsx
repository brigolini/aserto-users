import React, { FC } from "react";

import { Route, RouteProps } from "react-router-dom";

const GenericRoute: FC<RouteProps> = ({
  children,
  ...route
}) => (
  <Route
    {...route}
    component={undefined}
    render={() =>
        <Route {...route} />
    }
  />
);

export default GenericRoute;
