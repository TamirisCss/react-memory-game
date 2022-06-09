import React, { useEffect, useState } from "react";
import GetImages from "./../../hooks/GetImages";

const Board = ({ settingsOptions }) => {
  const [loading, setLoading] = useState(true);
  const images = GetImages(settingsOptions);

  useEffect(() => {
    if (images.length > 0) setLoading(false);
  }, [images]);

  return <div>{loading && <p>Loading...</p>}</div>;
};

export default Board;
