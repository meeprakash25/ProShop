import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <main>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>Proshop &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </main>
    </footer>
  );
};

export default Footer;
