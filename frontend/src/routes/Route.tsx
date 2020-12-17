import React from "react";

import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const user = undefined;
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "/login" }} />
        );
      }}
    />
  );
};

export default Route;
