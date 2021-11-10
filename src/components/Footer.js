import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            {/* <Col className="text-center py-3">Copyright &copy; OurShop</Col> */}
            <Col className="footer-copyright text-center py-3">Made with ❤ by Team Gray Jedi  
        <a href="https://about.me/pear" target="_blank" rel="noopener noreferrer" className="author"> Team Gray Jedi</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
