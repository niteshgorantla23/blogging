import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import "./style.css";
function Home() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/api/v1/blogs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBlog(jsonRes));
  }, []);
  const fetchData = () => {
    fetch("/api/v1/blogs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBlog(jsonRes));
  };
  const blogData = (value) => {
    navigate(`/blog/${value.id}`, {
      state: {
        id: value.id,
        auther: value.auther,
        title: value.title,
        description: value.article,
      },
    });
  };
  return (
    <div>
      <Head />
      <h3 className="title" onClick={() => fetchData()}>
        Get right to the good stuff
      </h3>
      <h3 className="sub-title">
        Your own private corner of the web to spend quality time with great
        articles.
      </h3>

      <Container>
        <Row>
          {blog.map((value, i) => {
            if (i < 3) {
              return (
                <Col className="col" onClick={() => blogData(value)}>
                  <Card className="card_article">
                    <Card.Body>
                      <Card.Title>
                        Title:
                        <br />
                        {value.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted white">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text className="black">
                        Created by {value.auther}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </Container>

      <h3 className="title2">Great recommendations — curated for you</h3>
      <h3 className="sub-title">
        We comb the internet and surface the best articles out there <br />— new
        perspectives, intriguing deep-dives, timeless classics <br />— so you
        can find content worthy of your time.
      </h3>

      <Container>
        <Row>
          {blog.map((value, i) => {
            if (i >= 3) {
              return (
                <Col className="col" onClick={() => blogData(value)}>
                  <Card className="card_article">
                    <Card.Body>
                      <Card.Title>
                        Title:
                        <br />
                        {value.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted white">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text className="black">
                        Created by {value.auther}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
      <div className="bottom" />
    </div>
  );
}

export default Home;
