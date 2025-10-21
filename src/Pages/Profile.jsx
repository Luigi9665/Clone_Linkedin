import { Col, Container, Row } from "react-bootstrap";
import PageDx from "../components/PageDx";
import RowCol1 from "../components/RowCol1";
import { useSelector } from "react-redux";

const Profile = () => {
  const profileSelect = useSelector((state) => state.profileSelect.content);

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <RowCol1 profileSelect={profileSelect} />
        </Col>
        <Col lg={3}>
          <PageDx />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
