import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const ContextApi = createContext();

const ContextApiComp = ({ children }) => {
  // Main url
  const urlData = {
    path: "https://api.themoviedb.org/3",
    getFan: "/movie/popular?",
    searchFan: "/search/movie?",
    apiKey: "api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64",
    searchPara: "&query=",
    langPara: "&language=",
    page: "&page=",
    imgUrl: "https://image.tmdb.org/t/p/w500",
  };
  // change lang state
  const [lang, setLang] = useState("en_US");
  // Main state
  const [movieData, setMovieData] = useState([]);
  // Main function for getting data
  const getMovieData = async () => {
    const mainMovieData = await axios.get(
      urlData.path +
        urlData.getFan +
        urlData.apiKey +
        urlData.langPara +
        lang +
        urlData.page +
        "1"
    );
    setMovieData(mainMovieData.data.results);
    setPages(mainMovieData.data.total_pages);
  };
  // To render the geting data function when projrct loaded
  useEffect(() => {
    getMovieData();
  }, [lang]);
  // Search Fanction
  const searchMovieData = async (searchWord) => {
    if (searchWord === "") {
      getMovieData();
    } else {
      const mainMovieData = await axios.get(
        urlData.path +
          urlData.searchFan +
          urlData.apiKey +
          urlData.searchPara +
          searchWord +
          urlData.langPara +
          lang
      );
      setMovieData(mainMovieData.data.results);
      setPages(mainMovieData.data.total_pages);
    }
  };
  // Paginat Function
  const paginatMovieData = async (pageNum) => {
    const mainAllMovieData = await axios.get(
      urlData.path +
        urlData.getFan +
        urlData.apiKey +
        urlData.langPara +
        lang +
        urlData.page +
        pageNum
    );
    setMovieData(mainAllMovieData.data.results);
  };
  // Get number of pages
  const [pages, setPages] = useState(0);

  return (
    <ContextApi.Provider
      value={[
        urlData,
        movieData,
        setMovieData,
        setLang,
        searchMovieData,
        paginatMovieData,
        pages,
        lang,
      ]}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextApiComp };
