import React from "react";
import Counter from "./Counter.jsx";
import Info from "./Info.jsx";

const callback = (info) => {
  console.log(info);
};

export default () => (
  <>
    <Counter startingCount={8} message="hello" decr={callback} />
    <Info message="hello" />
  </>
);
