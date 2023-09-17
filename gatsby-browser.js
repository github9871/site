import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>{element}</Provider>
  );