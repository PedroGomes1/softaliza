import React from "react";

import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

import { useSelector } from "react-redux";
import { IState } from "../store";
import { UserLoggedProps } from "../store/modules/auth/types";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { token } = useSelector<IState, UserLoggedProps>((state) => state.auth);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "/mainpage" }} />
        );
      }}
    />
  );
};

export default Route;
