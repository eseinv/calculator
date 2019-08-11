import React from "react";

export const CalcScreen = props => {
  return (
    <div className="screen" onClick={props.clearScreen}>
      {props.screen}
    </div>
  );
};
