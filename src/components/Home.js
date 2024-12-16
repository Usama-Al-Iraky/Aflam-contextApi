import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "./Navbar";
import MoviesList from "./MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieComp from "./MovieComp";

const Home = () => {
  return (
    <div>
      <NavbarComp/>
      <div className="main">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList/>} />
              <Route path="movie/:filmname/:id" element={<MovieComp/>} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
};

export default Home;
