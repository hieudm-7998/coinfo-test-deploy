import Link from "next/link";
import NavConstant from "../../constant/HeaderConstant/NavConstant";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#f0f9ff" }}>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>
                <img src={NavConstant.Logo} width={170} alt="" />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav className="ms-auto">
              <Link href="/" passHref>
                <Nav.Link className="fw-bold">Home</Nav.Link>
              </Link>
              <Link href="/news" passHref>
                <Nav.Link className="fw-bold">News</Nav.Link>
              </Link>
              <Link href="/news-detail" passHref>
                <Nav.Link className="fw-bold">Trade Signals</Nav.Link>
              </Link>
              <Link href="/about-us" passHref>
                <Nav.Link className="fw-bold">About us</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link className="fw-bold">Roadmap</Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link className="fw-bold">Learn 2 Earn</Nav.Link>
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Vietnamese</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
