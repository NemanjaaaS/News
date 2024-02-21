import { useUser } from "../UserHooks";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useNavigate } from "react-router-dom";

const NavbarGlavniUrednik = () => {
  const { userData, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar fixed="top" expand="lg" variant="dark" className="bg-dark shadow">
        <Container fluid>
          <Navbar.Brand href="#">News</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex">
              <DropdownButton
                id="dropdown-basic-button"
                title={userData ? userData.username : "User"}
                drop="start"
              >
                <Dropdown.Item
                  as={Link}
                  to={`/GUrednik/${userData.userId}/Register`}
                >
                  Add users
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={`/GUrednik/${userData.userId}`}>
                  Home
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to={`/GUrednik/${userData.userId}/allUsers`}
                >
                  All users
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
              </DropdownButton>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarGlavniUrednik;
