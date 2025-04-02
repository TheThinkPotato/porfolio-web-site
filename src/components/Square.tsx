import React from "react";

interface SquareProps {
  isLit: boolean;
  marginXOffset: number;
  marginYOffset: number;
  key: number;
}

const Square = ({ isLit, marginXOffset, marginYOffset }: SquareProps) => {
  const style: React.CSSProperties = {
    zIndex: "1",
    position: "absolute",
    left: marginXOffset,
    top: marginYOffset,
    backgroundColor: isLit
      ? "rgba(100, 100, 254 , 0.3)"
      : "rgba(50, 50, 100 , 0.3)",
    border: isLit ? "1px solid lightBlue" : "1px solid darkBlue",
    width: "10px",
    height: "10px",
    margin: "10px",
    display: "inline-block",
  };

  return <div style={style}></div>;
};

export default Square;
