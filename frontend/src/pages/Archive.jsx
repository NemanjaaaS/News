import { useState } from "react";
import NavbarArchiveSearch from "../components/navbars/NavbarArchiveSearch";
import { Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Archive = () => {
  const [allNews, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/api/vest/published"
        );
        setNews(result.data);
        setFilteredNews(result.data);
      } catch (error) {
        setError("Error loading news");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const handleFilterChange = (filteredNewsData) => {
    setFilteredNews(filteredNewsData);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <NavbarArchiveSearch
        news={allNews}
        setFilteredNews={handleFilterChange}
      />
      <Row className="g-4 mt-5">
        {filteredNews.map((vest) => (
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

export default Archive;
