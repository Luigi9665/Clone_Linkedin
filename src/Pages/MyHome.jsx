import { Container, Row } from "react-bootstrap";
import ColLeftHomePage from "../components/ColLeftHomePage";
import ColRightHomePage from "../components/ColRightHomePage";

const MyHome = () => {
  return (
    <Container>
      <Row>
        <ColLeftHomePage />
        <ColRightHomePage />
      </Row>
    </Container>
  );
};

export default MyHome;
