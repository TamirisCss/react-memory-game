import { useEffect, useState } from "react";

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const GetImages = () => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: "nature", //change to a varible
      orientation: "square",
      size: "small",
      per_page: 2, //change to avarible
      page: getRandomPage(),
    });
    return url;
  };

  const fecthPics = () => {
    fetch(buildUrl(), {
      headers: {
        Authorization: process.env.PEXEL_API_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos));
  };

  useEffect(() => {
    fecthPics();
  }, []);

  return images;
};

export default GetImages;
