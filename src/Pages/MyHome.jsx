import { Col, Container, Row } from "react-bootstrap";
import ColLeftHomePage from "../components/ColLeftHomePage";
import ColRightHomePage from "../components/ColRightHomePage";
import ColCenterHomePage from "../components/ColCenterHomePage";

const MyHome = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <ColLeftHomePage />
        </Col>
        <Col xs={12} lg={7}>
          <ColCenterHomePage />
        </Col>
        <Col xs={12} lg={2}>
          <ColRightHomePage />
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
