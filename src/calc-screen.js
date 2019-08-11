import React from "react";

export const CalcScreen = props => {
  return <div onClick={props.clearScreen}>{props.screen}</div>;
};
