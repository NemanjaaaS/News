import NewsCard from "../components/NewsCard";
import NavBarNovinar from "../components/navbars/NavbarUrednik";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useUser } from "../components/UserHooks";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeUrednik = () => {
  const { userData } = useUser();

  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/vest/forApprove?userId=${userData.userId}`
    );
    setNews(result.data);
  };
  return (
    <div>
      {news.length != 0 ? (
        <>
          <NavBarNovinar />
          <Row className="g-4 mt-5">
            {news.map((vest) => (
              <Col key={vest.id} xs={12} md={6} lg={4}>
                <Link to={`/${userData.userId}/NewsUrednik/${vest.id}`}>
                  <NewsCard {...vest} />
                </Link>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <>
          <NavBarNovinar />
          <p>No new news to approve</p>
        </>
      )}
    </div>
  );
};

export default HomeUrednik;
