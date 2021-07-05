import React from "react";

interface Props {
  direction: "col"|"row"
  padding?: string;
}

const FormUnit: React.FC<Props> = (
  { children,
    direction,
    padding }) => (
  <div className={`justify-start flex ${padding} ${direction === "col" ? `flex-col` : null}`}>
    {children}
  </div>
);
export default FormUnit;
