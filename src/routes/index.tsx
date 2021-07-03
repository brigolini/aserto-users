import React from "react";
import { Switch } from "react-router-dom";
import definitions from "./definitions";
import Loader from "react-loader-spinner";
import GenericRoute from './GenericRoute';

export default function Routes() {
  return (
    <React.Suspense fallback={<Loader type="Audio" color="#00BFFF" height={80} width={80} />}>
      <Switch>
        {definitions.map((route) => (
          <GenericRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </React.Suspense>
  );
}
