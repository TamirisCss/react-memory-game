import { useEffect, useState } from "react";

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useImages = (settingsOptions) => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: settingsOptions.selectCategory,
      orientation: "square",
      size: "small",
      per_page: settingsOptions.selectCardsCounter / 2,
      page: getRandomPage(),
    });
    return url;
  };

  const fecthPics = () => {
    fetch(/*"https://cors-anywhere.herokuapp.com/" + */ buildUrl(), {
      headers: {
        Authorization: process.env.REACT_APP_PEXEL_API_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!settingsOptions) return;
    fecthPics();
  }, [settingsOptions]);

  return images;
};

export default useImages;
