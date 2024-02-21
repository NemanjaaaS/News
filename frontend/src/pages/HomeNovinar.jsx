import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import NavbarNovinar from "../components/navbars/NavBarNovinar";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../components/UserHooks";

const HomeNovinar = () => {
  const { userData } = useUser();
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/vest/my?userId=${userData.userId}`
    );
    setNews(result.data);
  };
  console.log(news);
  return (
    <div>
      <NavbarNovinar />
      <Row className="g-4 mt-5">
        {news.map((vest) => (
          <Col key={vest.id} xs={12} md={6} lg={4}>
            <Link to={`/${userData.userId}/NewsNovinar/${vest.id}`}>
              <NewsCard {...vest} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeNovinar;
