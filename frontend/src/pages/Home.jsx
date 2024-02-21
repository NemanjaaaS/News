import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsCard from "../components/NewsCard";
import NavbarHome from "../components/navbars/NavbarHome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get("http://localhost:8080/api/vest/todays");
    setNews(result.data);
  };
  console.log(news);

  return (
    <div>
      <NavbarHome />

      <Row className="g-4 mt-5">
        {Array.isArray(news) &&
          news.map((vest) => (
            <Col key={vest.id} xs={12} md={6} lg={4}>
              <Link to={`/News/${vest.id}`}>
                <NewsCard {...vest} />
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;
