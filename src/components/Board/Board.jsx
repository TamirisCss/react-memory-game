import React from "react";
import GetImages from "./../../hooks/GetImages";

const Board = ({ settingsOptions }) => {
  const images = GetImages(settingsOptions);
  console.log({ images });
  return <div>Board</div>;
};

export default Board;
