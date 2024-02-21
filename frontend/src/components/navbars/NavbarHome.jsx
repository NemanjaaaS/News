import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="bg-dark shadow">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          News
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Link to={`/Archive`} className="ms-auto d-flex me-3">
            <Button variant="outline-success">Archive</Button>
          </Link>

          <Form className="d-flex">
            <Link to={`/Login`} className="btn btn-outline-success">
              Log in
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
