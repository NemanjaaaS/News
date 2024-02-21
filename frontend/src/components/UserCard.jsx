import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function UserCard(props) {
  const [isNovinar, setIsNovinar] = useState(props.role === "ROLE_NOVINAR");

  const handleClick = async () => {
    try {
      if (isNovinar) {
        await axios.get(
          `http://localhost:8080/api/user/changeRole?userId=${props.id}&role=ROLE_UREDNIK`
        );
        setIsNovinar(false);
      } else {
        await axios.get(
          `http://localhost:8080/api/user/changeRole?userId=${props.id}&role=ROLE_NOVINAR`
        );
        setIsNovinar(true);
      }
    } catch (error) {
      console.error("Error setting role:", error);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Card className="m-3 p-1">
          <Card.Header>{isNovinar ? "Novinar" : "Urednik"}</Card.Header>
          <Card.Body>
            <Card.Title>{props.username}</Card.Title>
            <Button variant="primary" onClick={handleClick}>
              {isNovinar ? "Set as Urednik" : "Set as Novinar"}
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserCard;
