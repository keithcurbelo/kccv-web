import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="bg-light">
      <Header />
      <Footer />
    </Container>
  );
};

export default HomePage;
