import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import PaginationComp from "./Pagination";
import NoData from "./NoData";
import { ContextApi } from "./ContextApi";



const MoviesList = () => {
  // context api for main data
  const [, movieData, , , , , ,] = useContext(ContextApi);
  return (
    <Row className="mt-3 viwe ">
      {movieData.length >= 1 ? (
        movieData.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <h2>
          <NoData />
        </h2>
      )}
      {movieData.length >= 1 ? <PaginationComp/> : null}
    </Row>
  );
};

export default MoviesList;
