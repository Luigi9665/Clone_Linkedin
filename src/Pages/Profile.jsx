import { Col, Container, Row } from "react-bootstrap";
import PageDx from "../components/PageDx";
import RowCol1 from "../components/RowCol1";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProfileVisualAction } from "../redux/action";
import { useParams } from "react-router";

const Profile = () => {
  const profileSelect = useSelector((state) => state.profileSelect.content);

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addProfileVisualAction(id));
    // dispatch(getEsperienzeAction(id));
  }, []);

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
