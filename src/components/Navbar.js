import Container from "react-bootstrap/Container";
import logo from "./images/logo.png";
import { Col, Image, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { ContextApi } from "./ContextApi";

function NavbarComp() {
  const [, , , setLang, searchMovieData, , , lang] = useContext(ContextApi);
  const [test, setTest] = useState("EN");
  return (
    <div className="nav-style">
      <Container>
        <Row>
          <Col
            xs="2"
            className=" align-items-center justify-content-start d-flex"
          >
            <a
              href="/"
              className="d-flex align-items-center text-decoration-none "
            >
              <Image src={logo} className="logo" />
              <span className="logo-text">Aflam</span>
            </a>
          </Col>
          <Col
            xs="10"
            className=" align-items-center justify-content-end d-flex"
          >
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => searchMovieData(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                if (lang === "en_US") {
                  setLang("ar");
                  setTest("AR");
                } else {
                  setLang("en_US");
                  setTest("EN");
                }
              }}
            >
              {test}
            </button>
            {/* <button className="search-btn" onClick={() => setLang("en_US")}>
              EN
            </button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavbarComp;
