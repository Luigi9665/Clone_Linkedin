import { Col, Container, Row } from "react-bootstrap";
import ColLeftHomePage from "../components/ColLeftHomePage";
import ColRightHomePage from "../components/ColRightHomePage";
import ColCenterHomePage from "../components/ColCenterHomePage";

const MyHome = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3} lg={2} xl={2}>
          <ColLeftHomePage />
        </Col>
        <Col xs={12} md={9} lg={6} xl={7}>
          <ColCenterHomePage />
        </Col>
        <Col xs={12} lg={4} xl={3}>
          <ColRightHomePage />
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
