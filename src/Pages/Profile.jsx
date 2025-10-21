import { Col, Container, Row } from "react-bootstrap";
import PageDx from "../components/PageDx";
import RowCol1 from "../components/RowCol1";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <RowCol1 />
        </Col>
        <Col lg={3}>
          <PageDx />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
