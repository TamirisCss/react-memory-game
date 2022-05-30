import { useEffect } from "react";

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const getImages = () => {
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
        Authorization: process.env.REACT_APP_AUTH_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data.photos));
  };

  useEffect(() => {
    fecthPics();
  }, []);
};

export default getImages;
