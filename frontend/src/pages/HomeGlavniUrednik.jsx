import NewsCard from "../components/NewsCard";
import NavbarGlavniUrednik from "../components/navbars/NavbarGlavniUrednik";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeGlavniUrednik = () => {
  const [allNews, setNews] = useState([]);
  useEffect(() => {
    const loadNews = async () => {
      const result = await axios.get("http://localhost:8080/api/vest/all");
      setNews(result.data);
    };

    loadNews();
  }, []);

  return (
    <div>
      <NavbarGlavniUrednik />
      <Row className="g-4 mt-5">
        {allNews.map((vest) => (
          <Col key={vest.id} xs={12} md={6} lg={4}>
            <NewsCard {...vest} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeGlavniUrednik;
