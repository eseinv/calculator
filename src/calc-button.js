import React from "react";

export const CalcButton = props => {
  if (props.cn.includes("btn-num")) {
    return (
      <div onClick={() => props.onClick(props.symbol)} className={props.cn}>
        {props.symbol}
      </div>
    );
  }
  if (props.cn.includes("btn-clear")) {
    return (
      <div onClick={() => props.onClick()} className={props.cn}>
        {props.symbol}
      </div>
    );
  }
  if (props.cn.includes("btn-math")) {
    return (
      <div onClick={() => props.onClick(props.operation)} className={props.cn}>
        {props.symbol}
      </div>
    );
  }
  if (props.cn.includes("btn-eq")) {
    return (
      <div onClick={() => props.onClick()} className={props.cn}>
        {props.symbol}
      </div>
    );
  }
};
